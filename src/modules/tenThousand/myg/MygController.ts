import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myg")
export default class MygController {
  @operation({
    summary: "Get Myg",
  })
  @get()
  static getMyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myg",
  })
  @post("{id}")
  static createMyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
