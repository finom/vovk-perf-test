import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kor")
export default class KorController {
  @operation({
    summary: "Get Kor",
  })
  @get()
  static getKor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kor",
  })
  @post("{id}")
  static createKor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
