import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mugs")
export default class MugController {
  @operation({
    summary: "Get Mugs",
  })
  @get()
  static getMugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mug",
  })
  @post("{id}")
  static createMug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
