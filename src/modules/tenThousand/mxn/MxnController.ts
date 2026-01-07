import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxn")
export default class MxnController {
  @operation({
    summary: "Get Mxn",
  })
  @get()
  static getMxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxn",
  })
  @post("{id}")
  static createMxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
