import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djds")
export default class DjdController {
  @operation({
    summary: "Get Djds",
  })
  @get()
  static getDjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djd",
  })
  @post("{id}")
  static createDjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
