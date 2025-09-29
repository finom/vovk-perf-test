import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltcs")
export default class LtcController {
  @operation({
    summary: "Get Ltcs",
  })
  @get()
  static getLtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltc",
  })
  @post("{id}")
  static createLtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
