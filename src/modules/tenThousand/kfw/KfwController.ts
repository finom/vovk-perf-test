import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfws")
export default class KfwController {
  @operation({
    summary: "Get Kfws",
  })
  @get()
  static getKfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfw",
  })
  @post("{id}")
  static createKfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
