import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kehs")
export default class KehController {
  @operation({
    summary: "Get Kehs",
  })
  @get()
  static getKehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keh",
  })
  @post("{id}")
  static createKeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
