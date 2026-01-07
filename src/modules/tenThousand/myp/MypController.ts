import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myp")
export default class MypController {
  @operation({
    summary: "Get Myp",
  })
  @get()
  static getMyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myp",
  })
  @post("{id}")
  static createMyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
