import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwcs")
export default class MwcController {
  @operation({
    summary: "Get Mwcs",
  })
  @get()
  static getMwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwc",
  })
  @post("{id}")
  static createMwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
