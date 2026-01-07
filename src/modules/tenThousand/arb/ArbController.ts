import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arb")
export default class ArbController {
  @operation({
    summary: "Get Arb",
  })
  @get()
  static getArb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arb",
  })
  @post("{id}")
  static createArb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
