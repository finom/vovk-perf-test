import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfps")
export default class HfpController {
  @operation({
    summary: "Get Hfps",
  })
  @get()
  static getHfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfp",
  })
  @post("{id}")
  static createHfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
