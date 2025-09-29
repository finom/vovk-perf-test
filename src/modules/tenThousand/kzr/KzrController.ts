import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzrs")
export default class KzrController {
  @operation({
    summary: "Get Kzrs",
  })
  @get()
  static getKzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzr",
  })
  @post("{id}")
  static createKzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
