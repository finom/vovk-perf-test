import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eries")
export default class EryController {
  @operation({
    summary: "Get Eries",
  })
  @get()
  static getEries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ery",
  })
  @post("{id}")
  static createEry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
