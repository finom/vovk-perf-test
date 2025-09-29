import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekts")
export default class EktController {
  @operation({
    summary: "Get Ekts",
  })
  @get()
  static getEkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekt",
  })
  @post("{id}")
  static createEkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
