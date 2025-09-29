import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyas")
export default class KyaController {
  @operation({
    summary: "Get Kyas",
  })
  @get()
  static getKyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kya",
  })
  @post("{id}")
  static createKya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
