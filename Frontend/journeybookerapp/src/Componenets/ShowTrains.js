import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const ShowTrains = () => {
    const location = useLocation();
    const receivedData = location.state.user;
    console.log("in show trains" + receivedData)


    const [trainData, setTrainData] = useState([]);
    const [selectedTrain, setSelectedTrain] = useState(null);
    const [pay, setPay] = useState({ paymentid: 0, amount: 0 })
    const [numTickets, setNumTickets] = useState(1);


    const titleStyle = {
        textAlign: 'center',
    };


    useEffect(() => {
        const fetchTrains = async () => {
            try {
                const response = await axios.get('http://localhost:8181/trains/findTrains');
                setTrainData(response.data); // Assuming response.data is an array of train data
            } catch (error) {
                console.error('Error fetching train data:', error);
            }
        };
        fetchTrains();
    }, []);

    const handleSelectTrain = (train) => {
        setSelectedTrain(train);
    };

    const handleBookTickets = async () => {
        // Calculate the payment amount
        // const amount = selectedTrain.ticketPrice * numTickets;

        // Create the payload for the POST request
        const postData = {
            
                ticketid: 0,
                train: {
                  trainid: selectedTrain.trainid,
                trainname: selectedTrain.trainname,
                source: selectedTrain.source,
                destination: selectedTrain.destination,
                ticketPrice: selectedTrain.ticketPrice,
                trainNo: selectedTrain.trainNo,
                departureTime: "2023-08-29T12:16:30.373Z",
                arrivalTime: "2023-08-29T12:16:30.373Z"
                },
                user: {
                 userid: receivedData.userid,
                  username: receivedData.username,
                  resetPasswordToken: "",
                  email: receivedData.email,
                  password: receivedData.password,
                  gender: receivedData.gender,
                  age: receivedData.age,
                  mobileno: receivedData.mobileno,
                  role: receivedData.role
                },
                payment: {
                  paymentid: 5,
                  amount: 500
                },
                source: selectedTrain.source,
                destination: selectedTrain.destination,
                noOfTickets: numTickets
              
        };

        try {
            // Send POST request to add tickets
            await axios.post('http://localhost:8181/BookTickets/Addtickets', postData);

            // Display success message
            alert('Tickets booked successfully!');

            setTicketDetails(postData);
        } catch (error) {
            console.error('Error booking tickets:', error);
        }
    };

    const [ticketDetails, setTicketDetails] = useState(null);

   



    return (
        <div>
            <div>
                <h1 style={titleStyle}>Trains Available</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Train id</th>
                        <th>TrainName</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Train No</th>
                        <th>Ticket price</th>
                        <th>Select</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {trainData.map((train, index) => (
                        <tr key={index}>
                            <td>{train.trainid}</td>
                            <td>{train.trainname}</td>
                            <td>{train.departureTime}</td>
                            <td>{train.arrivalTime}</td>
                            <td>{train.source}</td>
                            <td>{train.destination}</td>
                            <td>{train.trainNo}</td>
                            <td>{train.ticketPrice}</td>
                            <td>
                                <button onClick={() => handleSelectTrain(train)}>Select</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedTrain && (
                <div>
                    <h2>Selected Train Details</h2>
                    <p>Train Name: {selectedTrain.trainname}</p>
                    <p>Source: {selectedTrain.source}</p>
                    <p>Destination: {selectedTrain.destination}</p>
                    <label>
                        Number of Tickets:
                        <input
                            type="number"
                            value={numTickets}
                            onChange={(e) => setNumTickets(e.target.value)}
                        />
                    </label>
                    <button onClick={handleBookTickets}>Book Tickets</button>
                </div>
            )}
{ticketDetails && (
                <div>
                    <h2>Ticket Details</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Destination</th>
                                <th>No. of Tickets</th>
                                <th>Source</th>
                                <th>Payment ID</th>
                                <th>Train ID</th>
                                <th>User ID</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ticketDetails.ticketid}</td>
                                <td>{ticketDetails.destination}</td>
                                <td>{ticketDetails.noOfTickets}</td>
                                <td>{ticketDetails.source}</td>
                                <td>{ticketDetails.payment.paymentid}</td>
                                <td>{ticketDetails.train.trainid}</td>
                                <td>{ticketDetails.user.userid}</td>
                                <td>{ticketDetails.payment.amount*numTickets}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ShowTrains;
