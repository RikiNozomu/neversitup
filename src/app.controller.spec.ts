import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('permutations', () => {
    it("With input 'a'", () => {
      expect(appService.permutations('a')).toEqual(['a']);
    });

    it("With input 'ab'", () => {
      expect(appService.permutations('ab')).toEqual(['ab', 'ba']);
    });

    it("With input 'abc'", () => {
      expect(appService.permutations('abc')).toEqual(['abc','acb','bac','bca','cab','cba']);
    });

    it("With input 'aabb'", () => {
      expect(appService.permutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });
  });

  describe('findTheOdd', () => {
    it("[7]", () => {
      expect(appService.findTheOdd([7])).toEqual(7);
    });

    it("[0]", () => {
      expect(appService.findTheOdd([0])).toEqual(0);
    });

    it("[1,1,2]", () => {
      expect(appService.findTheOdd([1,1,2])).toEqual(2);
    });

    it("[0,1,0,1,0]", () => {
      expect(appService.findTheOdd([0,1,0,1,0])).toEqual(0);
    });

    it("[1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
      expect(appService.findTheOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4);
    });
  });

  describe('countSmileys', () => {
    it("[':)', ';(', ';}', ':-D']", () => {
      expect(appService.countTheSmileyFaces([':)', ';(', ';}', ':-D'])).toEqual(2);
    });

    it("[';D', ':-(', ':-)', ';~)']", () => {
      expect(appService.countTheSmileyFaces([';D', ':-(', ':-)', ';~)'])).toEqual(3);
    });

    it("[';]', ':[', ';*', ':$', ';-D']", () => {
      expect(appService.countTheSmileyFaces([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    });
  });
});
