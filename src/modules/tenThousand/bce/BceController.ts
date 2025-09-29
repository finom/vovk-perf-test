import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bces")
export default class BceController {
  @operation({
    summary: "Get Bces",
  })
  @get()
  static getBces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bce",
  })
  @post("{id}")
  static createBce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
