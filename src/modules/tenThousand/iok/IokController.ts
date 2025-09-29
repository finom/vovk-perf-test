import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioks")
export default class IokController {
  @operation({
    summary: "Get Ioks",
  })
  @get()
  static getIoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iok",
  })
  @post("{id}")
  static createIok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
