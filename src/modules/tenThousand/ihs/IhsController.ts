import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihs")
export default class IhsController {
  @operation({
    summary: "Get Ihs",
  })
  @get()
  static getIhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihs",
  })
  @post("{id}")
  static createIhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
