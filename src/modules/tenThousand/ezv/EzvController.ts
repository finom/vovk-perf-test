import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezvs")
export default class EzvController {
  @operation({
    summary: "Get Ezvs",
  })
  @get()
  static getEzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezv",
  })
  @post("{id}")
  static createEzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
