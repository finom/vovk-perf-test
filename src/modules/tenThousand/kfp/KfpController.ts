import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfps")
export default class KfpController {
  @operation({
    summary: "Get Kfps",
  })
  @get()
  static getKfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfp",
  })
  @post("{id}")
  static createKfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
