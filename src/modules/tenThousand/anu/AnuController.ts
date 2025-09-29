import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anus")
export default class AnuController {
  @operation({
    summary: "Get Anus",
  })
  @get()
  static getAnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anu",
  })
  @post("{id}")
  static createAnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
