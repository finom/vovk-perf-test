import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjfs")
export default class FjfController {
  @operation({
    summary: "Get Fjfs",
  })
  @get()
  static getFjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjf",
  })
  @post("{id}")
  static createFjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
