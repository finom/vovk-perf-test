import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdv")
export default class HdvController {
  @operation({
    summary: "Get Hdv",
  })
  @get()
  static getHdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdv",
  })
  @post("{id}")
  static createHdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
