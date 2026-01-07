import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmw")
export default class CmwController {
  @operation({
    summary: "Get Cmw",
  })
  @get()
  static getCmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmw",
  })
  @post("{id}")
  static createCmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
