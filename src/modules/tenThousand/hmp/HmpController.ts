import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmps")
export default class HmpController {
  @operation({
    summary: "Get Hmps",
  })
  @get()
  static getHmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmp",
  })
  @post("{id}")
  static createHmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
