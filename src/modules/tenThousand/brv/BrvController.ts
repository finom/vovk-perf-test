import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brv")
export default class BrvController {
  @operation({
    summary: "Get Brv",
  })
  @get()
  static getBrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brv",
  })
  @post("{id}")
  static createBrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
