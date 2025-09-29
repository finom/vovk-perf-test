import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajps")
export default class AjpController {
  @operation({
    summary: "Get Ajps",
  })
  @get()
  static getAjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajp",
  })
  @post("{id}")
  static createAjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
