import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bebs")
export default class BebController {
  @operation({
    summary: "Get Bebs",
  })
  @get()
  static getBebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Beb",
  })
  @post("{id}")
  static createBeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
