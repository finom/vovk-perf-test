import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huws")
export default class HuwController {
  @operation({
    summary: "Get Huws",
  })
  @get()
  static getHuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huw",
  })
  @post("{id}")
  static createHuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
