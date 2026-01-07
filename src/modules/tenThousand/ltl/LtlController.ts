import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltl")
export default class LtlController {
  @operation({
    summary: "Get Ltl",
  })
  @get()
  static getLtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltl",
  })
  @post("{id}")
  static createLtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
