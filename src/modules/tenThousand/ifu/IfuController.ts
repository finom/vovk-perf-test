import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifus")
export default class IfuController {
  @operation({
    summary: "Get Ifus",
  })
  @get()
  static getIfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifu",
  })
  @post("{id}")
  static createIfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
