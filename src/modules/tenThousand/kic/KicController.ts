import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kics")
export default class KicController {
  @operation({
    summary: "Get Kics",
  })
  @get()
  static getKics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kic",
  })
  @post("{id}")
  static createKic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
