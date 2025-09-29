import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nis")
export default class NiController {
  @operation({
    summary: "Get Nis",
  })
  @get()
  static getNis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ni",
  })
  @post("{id}")
  static createNi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
