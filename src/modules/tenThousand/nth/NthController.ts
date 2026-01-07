import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nth")
export default class NthController {
  @operation({
    summary: "Get Nth",
  })
  @get()
  static getNth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nth",
  })
  @post("{id}")
  static createNth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
