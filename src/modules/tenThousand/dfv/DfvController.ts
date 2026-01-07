import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfv")
export default class DfvController {
  @operation({
    summary: "Get Dfv",
  })
  @get()
  static getDfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfv",
  })
  @post("{id}")
  static createDfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
