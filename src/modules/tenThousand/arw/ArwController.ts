import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arw")
export default class ArwController {
  @operation({
    summary: "Get Arw",
  })
  @get()
  static getArw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arw",
  })
  @post("{id}")
  static createArw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
