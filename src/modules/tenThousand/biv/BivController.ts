import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bivs")
export default class BivController {
  @operation({
    summary: "Get Bivs",
  })
  @get()
  static getBivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biv",
  })
  @post("{id}")
  static createBiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
