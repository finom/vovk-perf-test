import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuses")
export default class IusController {
  @operation({
    summary: "Get Iuses",
  })
  @get()
  static getIuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ius",
  })
  @post("{id}")
  static createIus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
