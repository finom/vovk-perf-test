import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cujs")
export default class CujController {
  @operation({
    summary: "Get Cujs",
  })
  @get()
  static getCujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuj",
  })
  @post("{id}")
  static createCuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
