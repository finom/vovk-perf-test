import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kels")
export default class KelController {
  @operation({
    summary: "Get Kels",
  })
  @get()
  static getKels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kel",
  })
  @post("{id}")
  static createKel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
