import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdw")
export default class HdwController {
  @operation({
    summary: "Get Hdw",
  })
  @get()
  static getHdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdw",
  })
  @post("{id}")
  static createHdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
