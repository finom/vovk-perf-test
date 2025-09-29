import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fums")
export default class FumController {
  @operation({
    summary: "Get Fums",
  })
  @get()
  static getFums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fum",
  })
  @post("{id}")
  static createFum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
