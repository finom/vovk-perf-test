import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icls")
export default class IclController {
  @operation({
    summary: "Get Icls",
  })
  @get()
  static getIcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icl",
  })
  @post("{id}")
  static createIcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
