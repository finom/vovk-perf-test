import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mebs")
export default class MebController {
  @operation({
    summary: "Get Mebs",
  })
  @get()
  static getMebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meb",
  })
  @post("{id}")
  static createMeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
