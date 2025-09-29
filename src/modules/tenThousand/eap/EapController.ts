import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaps")
export default class EapController {
  @operation({
    summary: "Get Eaps",
  })
  @get()
  static getEaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eap",
  })
  @post("{id}")
  static createEap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
