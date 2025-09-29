import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azes")
export default class AzeController {
  @operation({
    summary: "Get Azes",
  })
  @get()
  static getAzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aze",
  })
  @post("{id}")
  static createAze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
