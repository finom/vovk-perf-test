import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izes")
export default class IzeController {
  @operation({
    summary: "Get Izes",
  })
  @get()
  static getIzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ize",
  })
  @post("{id}")
  static createIze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
