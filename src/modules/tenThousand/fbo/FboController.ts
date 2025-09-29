import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbos")
export default class FboController {
  @operation({
    summary: "Get Fbos",
  })
  @get()
  static getFbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbo",
  })
  @post("{id}")
  static createFbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
