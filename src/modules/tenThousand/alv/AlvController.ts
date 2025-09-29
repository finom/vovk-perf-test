import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alvs")
export default class AlvController {
  @operation({
    summary: "Get Alvs",
  })
  @get()
  static getAlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alv",
  })
  @post("{id}")
  static createAlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
