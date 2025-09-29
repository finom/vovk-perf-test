import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgus")
export default class FguController {
  @operation({
    summary: "Get Fgus",
  })
  @get()
  static getFgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgu",
  })
  @post("{id}")
  static createFgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
