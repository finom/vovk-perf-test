import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apgs")
export default class ApgController {
  @operation({
    summary: "Get Apgs",
  })
  @get()
  static getApgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apg",
  })
  @post("{id}")
  static createApg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
