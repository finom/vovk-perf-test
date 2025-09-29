import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfrs")
export default class GfrController {
  @operation({
    summary: "Get Gfrs",
  })
  @get()
  static getGfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfr",
  })
  @post("{id}")
  static createGfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
