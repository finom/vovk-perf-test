import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anjs")
export default class AnjController {
  @operation({
    summary: "Get Anjs",
  })
  @get()
  static getAnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anj",
  })
  @post("{id}")
  static createAnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
