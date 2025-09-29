import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtks")
export default class JtkController {
  @operation({
    summary: "Get Jtks",
  })
  @get()
  static getJtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtk",
  })
  @post("{id}")
  static createJtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
