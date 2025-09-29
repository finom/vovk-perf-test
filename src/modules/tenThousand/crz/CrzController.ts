import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crzs")
export default class CrzController {
  @operation({
    summary: "Get Crzs",
  })
  @get()
  static getCrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crz",
  })
  @post("{id}")
  static createCrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
