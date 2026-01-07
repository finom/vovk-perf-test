import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcc")
export default class DccController {
  @operation({
    summary: "Get Dcc",
  })
  @get()
  static getDcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcc",
  })
  @post("{id}")
  static createDcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
