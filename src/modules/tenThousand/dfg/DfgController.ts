import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfg")
export default class DfgController {
  @operation({
    summary: "Get Dfg",
  })
  @get()
  static getDfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfg",
  })
  @post("{id}")
  static createDfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
