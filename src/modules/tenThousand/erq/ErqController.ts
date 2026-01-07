import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erq")
export default class ErqController {
  @operation({
    summary: "Get Erq",
  })
  @get()
  static getErq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erq",
  })
  @post("{id}")
  static createErq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
