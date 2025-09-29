import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahes")
export default class AheController {
  @operation({
    summary: "Get Ahes",
  })
  @get()
  static getAhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahe",
  })
  @post("{id}")
  static createAhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
