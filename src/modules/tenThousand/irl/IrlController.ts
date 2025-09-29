import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irls")
export default class IrlController {
  @operation({
    summary: "Get Irls",
  })
  @get()
  static getIrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irl",
  })
  @post("{id}")
  static createIrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
