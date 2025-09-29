import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iecs")
export default class IecController {
  @operation({
    summary: "Get Iecs",
  })
  @get()
  static getIecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iec",
  })
  @post("{id}")
  static createIec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
