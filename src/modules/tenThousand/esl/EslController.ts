import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esls")
export default class EslController {
  @operation({
    summary: "Get Esls",
  })
  @get()
  static getEsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esl",
  })
  @post("{id}")
  static createEsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
