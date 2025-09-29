import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ids")
export default class IdController {
  @operation({
    summary: "Get Ids",
  })
  @get()
  static getIds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Id",
  })
  @post("{id}")
  static createId = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
