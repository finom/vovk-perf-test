import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyvs")
export default class IyvController {
  @operation({
    summary: "Get Iyvs",
  })
  @get()
  static getIyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyv",
  })
  @post("{id}")
  static createIyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
