import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ises")
export default class IseController {
  @operation({
    summary: "Get Ises",
  })
  @get()
  static getIses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ise",
  })
  @post("{id}")
  static createIse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
