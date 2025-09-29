import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etus")
export default class EtuController {
  @operation({
    summary: "Get Etus",
  })
  @get()
  static getEtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etu",
  })
  @post("{id}")
  static createEtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
