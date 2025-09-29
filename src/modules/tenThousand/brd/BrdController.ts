import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brds")
export default class BrdController {
  @operation({
    summary: "Get Brds",
  })
  @get()
  static getBrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brd",
  })
  @post("{id}")
  static createBrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
