import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnis")
export default class MniController {
  @operation({
    summary: "Get Mnis",
  })
  @get()
  static getMnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mni",
  })
  @post("{id}")
  static createMni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
