import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azls")
export default class AzlController {
  @operation({
    summary: "Get Azls",
  })
  @get()
  static getAzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azl",
  })
  @post("{id}")
  static createAzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
