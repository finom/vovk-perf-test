import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inies")
export default class InyController {
  @operation({
    summary: "Get Inies",
  })
  @get()
  static getInies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iny",
  })
  @post("{id}")
  static createIny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
