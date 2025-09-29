import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzns")
export default class HznController {
  @operation({
    summary: "Get Hzns",
  })
  @get()
  static getHzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzn",
  })
  @post("{id}")
  static createHzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
