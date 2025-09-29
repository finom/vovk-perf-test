import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aths")
export default class AthController {
  @operation({
    summary: "Get Aths",
  })
  @get()
  static getAths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ath",
  })
  @post("{id}")
  static createAth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
