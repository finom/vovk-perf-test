import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hajs")
export default class HajController {
  @operation({
    summary: "Get Hajs",
  })
  @get()
  static getHajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haj",
  })
  @post("{id}")
  static createHaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
