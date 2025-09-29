import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsks")
export default class GskController {
  @operation({
    summary: "Get Gsks",
  })
  @get()
  static getGsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsk",
  })
  @post("{id}")
  static createGsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
