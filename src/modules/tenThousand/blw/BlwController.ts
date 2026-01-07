import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blw")
export default class BlwController {
  @operation({
    summary: "Get Blw",
  })
  @get()
  static getBlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blw",
  })
  @post("{id}")
  static createBlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
