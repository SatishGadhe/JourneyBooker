package com.app.Entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
public enum Role {
	User,Admin;
	@Override
	public String toString() {
		
		return super.toString();
	}
}
