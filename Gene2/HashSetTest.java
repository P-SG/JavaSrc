package Gene2;

import java.util.HashSet;
import java.util.Set;

public class HashSetTest {//Set(집합):순서없고 중복허용안됨
	public static void main(String[] args) {
		Set set = new HashSet();//해쉬셋 객체를 생성한다
		//Collection 인터페이스로 구현된 다른 클래스와 마찬가지로 요소로 저장되는 데이터가
		//문자,정수,실수등 다양한 형태들이 저장될수 있고, 요소의 갯수는 자동으로 증가합니다.
		set.add("Hello");
		set.add(new Integer(178));
		set.add(new Float(4.56F));
		set.add("Hello");
		set.add(new Integer(178));
		set.add(new MyStudent_Set());
		//Set(Hello,178,4.56,Hello(중복-허용안됨),178(중복),이름은 이순신, 나이는 23살 입니다.)추가
		Object[] obj = set.toArray();
		for (int i = 0; i < set.size(); i++) {
			System.out.println(obj[i]);
		}//set.toArray()->
		//Set의 내용이 대입된
		//obj(Hello,178,4.56,이름은 이순신, 나이는 23살 입니다.)출력
		System.out.println(set);
	}//set->toString() {
	//return "이름은 " + name +" ,나이는 " +age +"살 입니다.";호출
}
