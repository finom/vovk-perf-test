import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apls")
export default class AplController {
  @operation({
    summary: "Get Apls",
  })
  @get()
  static getApls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apl",
  })
  @post("{id}")
  static createApl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
