import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apies")
export default class ApyController {
  @operation({
    summary: "Get Apies",
  })
  @get()
  static getApies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apy",
  })
  @post("{id}")
  static createApy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
