import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myq")
export default class MyqController {
  @operation({
    summary: "Get Myq",
  })
  @get()
  static getMyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myq",
  })
  @post("{id}")
  static createMyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
