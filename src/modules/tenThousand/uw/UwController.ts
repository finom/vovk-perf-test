import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uw")
export default class UwController {
  @operation({
    summary: "Get Uw",
  })
  @get()
  static getUw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uw",
  })
  @post("{id}")
  static createUw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
