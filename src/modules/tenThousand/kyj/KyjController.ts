import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyjs")
export default class KyjController {
  @operation({
    summary: "Get Kyjs",
  })
  @get()
  static getKyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyj",
  })
  @post("{id}")
  static createKyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
