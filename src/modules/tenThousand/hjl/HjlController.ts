import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjls")
export default class HjlController {
  @operation({
    summary: "Get Hjls",
  })
  @get()
  static getHjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjl",
  })
  @post("{id}")
  static createHjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
