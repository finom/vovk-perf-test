import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iljs")
export default class IljController {
  @operation({
    summary: "Get Iljs",
  })
  @get()
  static getIljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilj",
  })
  @post("{id}")
  static createIlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
