import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jurs")
export default class JurController {
  @operation({
    summary: "Get Jurs",
  })
  @get()
  static getJurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jur",
  })
  @post("{id}")
  static createJur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
