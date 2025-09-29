import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzs")
export default class HzController {
  @operation({
    summary: "Get Hzs",
  })
  @get()
  static getHzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hz",
  })
  @post("{id}")
  static createHz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
