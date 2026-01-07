import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfn")
export default class DfnController {
  @operation({
    summary: "Get Dfn",
  })
  @get()
  static getDfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfn",
  })
  @post("{id}")
  static createDfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
