import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ills")
export default class IllController {
  @operation({
    summary: "Get Ills",
  })
  @get()
  static getIlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ill",
  })
  @post("{id}")
  static createIll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
