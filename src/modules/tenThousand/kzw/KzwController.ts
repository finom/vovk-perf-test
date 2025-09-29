import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzws")
export default class KzwController {
  @operation({
    summary: "Get Kzws",
  })
  @get()
  static getKzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzw",
  })
  @post("{id}")
  static createKzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
