import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djies")
export default class DjyController {
  @operation({
    summary: "Get Djies",
  })
  @get()
  static getDjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djy",
  })
  @post("{id}")
  static createDjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
