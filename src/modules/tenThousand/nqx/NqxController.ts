import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqxes")
export default class NqxController {
  @operation({
    summary: "Get Nqxes",
  })
  @get()
  static getNqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqx",
  })
  @post("{id}")
  static createNqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
