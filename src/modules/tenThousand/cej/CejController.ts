import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cejs")
export default class CejController {
  @operation({
    summary: "Get Cejs",
  })
  @get()
  static getCejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cej",
  })
  @post("{id}")
  static createCej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
