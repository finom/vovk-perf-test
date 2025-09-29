import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alies")
export default class AlyController {
  @operation({
    summary: "Get Alies",
  })
  @get()
  static getAlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aly",
  })
  @post("{id}")
  static createAly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
