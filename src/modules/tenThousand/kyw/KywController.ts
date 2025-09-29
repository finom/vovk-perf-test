import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyws")
export default class KywController {
  @operation({
    summary: "Get Kyws",
  })
  @get()
  static getKyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyw",
  })
  @post("{id}")
  static createKyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
