import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyas")
export default class EyaController {
  @operation({
    summary: "Get Eyas",
  })
  @get()
  static getEyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eya",
  })
  @post("{id}")
  static createEya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
