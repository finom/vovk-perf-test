import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grks")
export default class GrkController {
  @operation({
    summary: "Get Grks",
  })
  @get()
  static getGrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grk",
  })
  @post("{id}")
  static createGrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
