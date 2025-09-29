import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nats")
export default class NatController {
  @operation({
    summary: "Get Nats",
  })
  @get()
  static getNats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nat",
  })
  @post("{id}")
  static createNat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
