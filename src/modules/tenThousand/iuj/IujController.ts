import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iujs")
export default class IujController {
  @operation({
    summary: "Get Iujs",
  })
  @get()
  static getIujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuj",
  })
  @post("{id}")
  static createIuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
