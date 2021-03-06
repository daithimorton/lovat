package com.bitbosh.lovat.webgateway.views;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.bitbosh.lovat.webgateway.views.DashboardView;

public class DashboardViewUnitTest {

	@Test
	public void viewReturnsCorrectComponentAfterConstruction() {
		String expectedHtml = "<dev>testHtml</div>";
		
		DashboardView view = new DashboardView(expectedHtml);
		String actualHtml = view.getDashbaordViewHtml();
		assertEquals(expectedHtml, actualHtml);		
	}
}
