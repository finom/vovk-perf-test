import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isus")
export default class IsuController {
  @operation({
    summary: "Get Isus",
  })
  @get()
  static getIsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isu",
  })
  @post("{id}")
  static createIsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
