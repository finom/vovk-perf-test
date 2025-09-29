import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nris")
export default class NriController {
  @operation({
    summary: "Get Nris",
  })
  @get()
  static getNris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nri",
  })
  @post("{id}")
  static createNri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
