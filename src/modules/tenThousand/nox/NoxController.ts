import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noxen")
export default class NoxController {
  @operation({
    summary: "Get Noxen",
  })
  @get()
  static getNoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nox",
  })
  @post("{id}")
  static createNox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
