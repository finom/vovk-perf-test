import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzbs")
export default class HzbController {
  @operation({
    summary: "Get Hzbs",
  })
  @get()
  static getHzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzb",
  })
  @post("{id}")
  static createHzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
