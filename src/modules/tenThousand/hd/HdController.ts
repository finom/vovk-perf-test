import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hd")
export default class HdController {
  @operation({
    summary: "Get Hd",
  })
  @get()
  static getHd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hd",
  })
  @post("{id}")
  static createHd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
