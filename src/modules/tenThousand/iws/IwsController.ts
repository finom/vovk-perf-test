import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iws")
export default class IwsController {
  @operation({
    summary: "Get Iws",
  })
  @get()
  static getIws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iws",
  })
  @post("{id}")
  static createIws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
