import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gds")
export default class GdController {
  @operation({
    summary: "Get Gds",
  })
  @get()
  static getGds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gd",
  })
  @post("{id}")
  static createGd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
