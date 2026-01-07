import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nat")
export default class NatController {
  @operation({
    summary: "Get Nat",
  })
  @get()
  static getNat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nat",
  })
  @post("{id}")
  static createNat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
