import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbe")
export default class CbeController {
  @operation({
    summary: "Get Cbe",
  })
  @get()
  static getCbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbe",
  })
  @post("{id}")
  static createCbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
