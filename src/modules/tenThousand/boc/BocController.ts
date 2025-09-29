import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bocs")
export default class BocController {
  @operation({
    summary: "Get Bocs",
  })
  @get()
  static getBocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boc",
  })
  @post("{id}")
  static createBoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
