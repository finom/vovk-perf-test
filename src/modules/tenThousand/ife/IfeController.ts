import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifes")
export default class IfeController {
  @operation({
    summary: "Get Ifes",
  })
  @get()
  static getIfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ife",
  })
  @post("{id}")
  static createIfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
