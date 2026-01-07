import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nat")
export default class NatController {
  @operation({
    summary: "Get Nat",
  })
  @get()
  static getNat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nat",
  })
  @post("{id}")
  static createNat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
