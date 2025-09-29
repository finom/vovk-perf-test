import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfls")
export default class KflController {
  @operation({
    summary: "Get Kfls",
  })
  @get()
  static getKfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfl",
  })
  @post("{id}")
  static createKfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
