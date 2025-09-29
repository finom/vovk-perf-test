import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilies")
export default class IlyController {
  @operation({
    summary: "Get Ilies",
  })
  @get()
  static getIlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ily",
  })
  @post("{id}")
  static createIly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
