import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekvs")
export default class EkvController {
  @operation({
    summary: "Get Ekvs",
  })
  @get()
  static getEkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekv",
  })
  @post("{id}")
  static createEkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
