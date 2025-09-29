import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vjs")
export default class VjController {
  @operation({
    summary: "Get Vjs",
  })
  @get()
  static getVjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vj",
  })
  @post("{id}")
  static createVj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
