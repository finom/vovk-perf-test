import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahzs")
export default class AhzController {
  @operation({
    summary: "Get Ahzs",
  })
  @get()
  static getAhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahz",
  })
  @post("{id}")
  static createAhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
