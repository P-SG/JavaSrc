package Gene2;

import java.util.HashMap;
import java.util.Map;

public class HashMapTest {
	public static void main(String[] args) {
		Map map = new HashMap();// HashMap():(키값(중복가능),벨류값)을 가짐
		map.put(1, new Integer(100));// (1,100)
		map.put("second", "Hello World");// (second,Hello World)
		map.put("third", new MyStudent_Set());// (third,이름은 이순신 ,나이는 23살 입니다.)
		map.put("fourth", null);// (fourth,null)
		// Integer i = map.get(1);
		Integer i = (Integer) map.get(1);// 키값1의 100을 가져옴
		// String str = map.get("second");
		String str = (String) map.get("second");// 키값second의 Hello World가져옴
		System.out.println(i);
		System.out.println(str);

		MyStudent_Set st = (MyStudent_Set) map.get("third");// 키값third의 이름은 ~~가져옴
		System.out.println(st);
		System.out.println(map.get("third"));// 키값third의 이름은 ~~출력
		System.out.println(map.get("fourth"));// 키값fourth의 null을 출력
	}
}
