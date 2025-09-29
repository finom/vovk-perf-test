import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfrs")
export default class BfrController {
  @operation({
    summary: "Get Bfrs",
  })
  @get()
  static getBfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfr",
  })
  @post("{id}")
  static createBfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
