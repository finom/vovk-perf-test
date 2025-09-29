import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apbs")
export default class ApbController {
  @operation({
    summary: "Get Apbs",
  })
  @get()
  static getApbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apb",
  })
  @post("{id}")
  static createApb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
