import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acjs")
export default class AcjController {
  @operation({
    summary: "Get Acjs",
  })
  @get()
  static getAcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acj",
  })
  @post("{id}")
  static createAcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
