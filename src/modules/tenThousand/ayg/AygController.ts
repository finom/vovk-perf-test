import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aygs")
export default class AygController {
  @operation({
    summary: "Get Aygs",
  })
  @get()
  static getAygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayg",
  })
  @post("{id}")
  static createAyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
