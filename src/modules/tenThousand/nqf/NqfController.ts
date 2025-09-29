import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqfs")
export default class NqfController {
  @operation({
    summary: "Get Nqfs",
  })
  @get()
  static getNqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqf",
  })
  @post("{id}")
  static createNqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
