import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nias")
export default class NiaController {
  @operation({
    summary: "Get Nias",
  })
  @get()
  static getNias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nia",
  })
  @post("{id}")
  static createNia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
