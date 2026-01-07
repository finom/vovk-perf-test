import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdq")
export default class HdqController {
  @operation({
    summary: "Get Hdq",
  })
  @get()
  static getHdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdq",
  })
  @post("{id}")
  static createHdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
