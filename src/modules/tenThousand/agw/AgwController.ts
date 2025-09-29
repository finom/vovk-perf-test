import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agws")
export default class AgwController {
  @operation({
    summary: "Get Agws",
  })
  @get()
  static getAgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agw",
  })
  @post("{id}")
  static createAgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
