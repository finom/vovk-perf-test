import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ays")
export default class AyController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ay",
  })
  @post("{id}")
  static createAy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
