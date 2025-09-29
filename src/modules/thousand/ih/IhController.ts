import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihs")
export default class IhController {
  @operation({
    summary: "Get Ihs",
  })
  @get()
  static getIhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ih",
  })
  @post("{id}")
  static createIh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
