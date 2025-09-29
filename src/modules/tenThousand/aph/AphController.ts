import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aphs")
export default class AphController {
  @operation({
    summary: "Get Aphs",
  })
  @get()
  static getAphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aph",
  })
  @post("{id}")
  static createAph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
