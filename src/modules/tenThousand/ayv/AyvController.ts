import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayvs")
export default class AyvController {
  @operation({
    summary: "Get Ayvs",
  })
  @get()
  static getAyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayv",
  })
  @post("{id}")
  static createAyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
