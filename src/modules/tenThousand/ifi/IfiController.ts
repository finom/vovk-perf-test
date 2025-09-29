import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifis")
export default class IfiController {
  @operation({
    summary: "Get Ifis",
  })
  @get()
  static getIfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifi",
  })
  @post("{id}")
  static createIfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
