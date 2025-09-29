import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgus")
export default class HguController {
  @operation({
    summary: "Get Hgus",
  })
  @get()
  static getHgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgu",
  })
  @post("{id}")
  static createHgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
