import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neks")
export default class NekController {
  @operation({
    summary: "Get Neks",
  })
  @get()
  static getNeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nek",
  })
  @post("{id}")
  static createNek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
