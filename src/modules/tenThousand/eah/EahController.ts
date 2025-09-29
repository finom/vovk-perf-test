import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eahs")
export default class EahController {
  @operation({
    summary: "Get Eahs",
  })
  @get()
  static getEahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eah",
  })
  @post("{id}")
  static createEah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
