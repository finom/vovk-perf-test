import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auzs")
export default class AuzController {
  @operation({
    summary: "Get Auzs",
  })
  @get()
  static getAuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auz",
  })
  @post("{id}")
  static createAuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
