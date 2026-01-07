import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmt")
export default class KmtController {
  @operation({
    summary: "Get Kmt",
  })
  @get()
  static getKmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmt",
  })
  @post("{id}")
  static createKmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
