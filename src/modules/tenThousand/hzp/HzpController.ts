import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzps")
export default class HzpController {
  @operation({
    summary: "Get Hzps",
  })
  @get()
  static getHzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzp",
  })
  @post("{id}")
  static createHzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
