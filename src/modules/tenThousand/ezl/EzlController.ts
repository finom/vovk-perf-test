import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezls")
export default class EzlController {
  @operation({
    summary: "Get Ezls",
  })
  @get()
  static getEzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezl",
  })
  @post("{id}")
  static createEzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
