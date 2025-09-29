import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwcs")
export default class BwcController {
  @operation({
    summary: "Get Bwcs",
  })
  @get()
  static getBwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwc",
  })
  @post("{id}")
  static createBwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
