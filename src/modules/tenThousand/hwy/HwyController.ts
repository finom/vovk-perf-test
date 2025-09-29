import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwies")
export default class HwyController {
  @operation({
    summary: "Get Hwies",
  })
  @get()
  static getHwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwy",
  })
  @post("{id}")
  static createHwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
