import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AdminPage = () => {
    const location = useLocation();
    const receivedData = location.state.user;

    const [trainData, setTrainData] = useState([]);

    const fetchTrains = async () => {
        try {
            const response = await axios.get('http://localhost:8181/trains/findTrains');
            setTrainData(response.data); // Assuming response.data is an array of train data
        } catch (error) {
            console.error('Error fetching train data:', error);
        }
    };

    useEffect(() => {
        fetchTrains();
    }, []);




    const handleDeleteTrain = async (trainId) => {
        try {
            await axios.delete(`http://localhost:8181/trains/deletetrain/${trainId}`);
            fetchTrains();
        } catch (error) {
            console.error('Error deleting train:', error);
        }
    };

    const titleStyle = {
        textAlign: 'center',
    };

    const [editingTrain, setEditingTrain] = useState(null);
    const [editedTrain, setEditedTrain] = useState({
        trainname: '',
        departureTime: '',
        arrivalTime: '',
        source: '',
        destination: '',
        trainNo: '',
        ticketPrice: '',
    });

    const handleEditTrain = async (trainId) => {
        // Find the train being edited from trainData
        const trainToEdit = trainData.find(train => train.trainid === trainId);

        // Set the editingTrain and editedTrain states
        setEditingTrain(trainId);
        setEditedTrain({
            trainname: trainToEdit.trainname,
            departureTime: trainToEdit.departureTime,
            arrivalTime: trainToEdit.arrivalTime,
            source: trainToEdit.source,
            destination: trainToEdit.destination,
            trainNo: trainToEdit.trainNo,
            ticketPrice: trainToEdit.ticketPrice,
        });
    };
    const handleSaveEdit = async () => {
        try {
            await axios.put('http://localhost:8181/trains/updateTrain', editedTrain);
            fetchTrains();
            setEditingTrain(null);
            setEditedTrain({
                trainname: '',
                departureTime: '',
                arrivalTime: '',
                source: '',
                destination: '',
                trainNo: '',
                ticketPrice: '',
            });
        } catch (error) {
            console.error('Error updating train:', error);
        }
    };

    const [addingTrain, setAddingTrain] = useState(false);
    const [newTrain, setNewTrain] = useState({
        trainname: '',
        departureTime: '2023-08-28T15:10:38.599Z',
        arrivalTime: '2023-08-28T15:10:38.599Z',
        source: '',
        destination: '',
        trainNo: '',
        ticketPrice: '',
    });

    const handleAddTrain = async () => {
        try {
            await axios.post('http://localhost:8181/trains/AddTrains', newTrain);
            fetchTrains();
            setAddingTrain(false);
            setNewTrain({
                trainname: '',
                departureTime: '',
                arrivalTime: '',
                source: '',
                destination: '',
                trainNo: '',
                ticketPrice: '',
            });
        } catch (error) {
            console.error('Error adding train:', error);
        }
    };


    return (
        <div>
            <h1 style={titleStyle}>Trains Available</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Train id</th>
                        <th>Train Name</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Train No</th>
                        <th>Ticket Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {trainData.map((train) => (
                        <tr key={train.trainid}>
                            <td>{train.trainid}</td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.trainname}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, trainname: e.target.value })}
                                    />
                                ) : (
                                    train.trainname
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.departureTime}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, departureTime: e.target.value })}
                                    />
                                ) : (
                                    train.departureTime
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.arrivalTime}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, arrivalTime: e.target.value })}
                                    />
                                ) : (
                                    train.departureTime
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.source}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, source: e.target.value })}
                                    />
                                ) : (
                                    train.source
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.destination}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, destination: e.target.value })}
                                    />
                                ) : (
                                    train.destination
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.trainNo}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, trainNo: e.target.value })}
                                    />
                                ) : (
                                    train.trainNo
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <input
                                        type="text"
                                        value={editedTrain.ticketPrice}
                                        onChange={(e) => setEditedTrain({ ...editedTrain, ticketPrice: e.target.value })}
                                    />
                                ) : (
                                    train.ticketPrice
                                )}
                            </td>
                            <td>
                                {editingTrain === train.trainid ? (
                                    <button onClick={handleSaveEdit}>Save</button>
                                ) : (
                                    <button onClick={() => handleEditTrain(train.trainid)}>Edit</button>
                                )}
                                </td>
                                <td>
                                <button onClick={() => handleDeleteTrain(train.trainid)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {addingTrain ? (
                <div>
                    <h2>Add New Train</h2>
                    <input
                        type="text"
                        placeholder="Train Name"
                        value={newTrain.trainname}
                        onChange={(e) => setNewTrain({ ...newTrain, trainname: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Departure Time"
                        value={newTrain.departureTime}
                        onChange={(e) => setNewTrain({ ...newTrain, departureTime: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Arrival Time"
                        value={newTrain.arrivalTime}
                        onChange={(e) => setNewTrain({ ...newTrain, arrivalTime: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Source"
                        value={newTrain.source}
                        onChange={(e) => setNewTrain({ ...newTrain, source: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Destination"
                        value={newTrain.destination}
                        onChange={(e) => setNewTrain({ ...newTrain, destination: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Train Number"
                        value={newTrain.trainNo}
                        onChange={(e) => setNewTrain({ ...newTrain, trainNo: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Ticket Price"
                        value={newTrain.ticketPrice}
                        onChange={(e) => setNewTrain({ ...newTrain, ticketPrice: e.target.value })}
                    />
                    <button onClick={handleAddTrain}>Save Train</button>
                    <button onClick={() => setAddingTrain(false)}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setAddingTrain(true)}>Add New Train</button>
            )}
        </div>
    );
};

export default AdminPage;
