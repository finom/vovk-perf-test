import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afts")
export default class AftController {
  @operation({
    summary: "Get Afts",
  })
  @get()
  static getAfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aft",
  })
  @post("{id}")
  static createAft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
