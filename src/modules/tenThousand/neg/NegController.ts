import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neg")
export default class NegController {
  @operation({
    summary: "Get Neg",
  })
  @get()
  static getNeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neg",
  })
  @post("{id}")
  static createNeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
