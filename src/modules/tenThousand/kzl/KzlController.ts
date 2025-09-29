import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzls")
export default class KzlController {
  @operation({
    summary: "Get Kzls",
  })
  @get()
  static getKzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzl",
  })
  @post("{id}")
  static createKzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
