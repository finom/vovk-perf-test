import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naas")
export default class NaaController {
  @operation({
    summary: "Get Naas",
  })
  @get()
  static getNaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naa",
  })
  @post("{id}")
  static createNaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
