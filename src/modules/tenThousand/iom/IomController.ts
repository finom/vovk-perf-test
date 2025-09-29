import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioms")
export default class IomController {
  @operation({
    summary: "Get Ioms",
  })
  @get()
  static getIoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iom",
  })
  @post("{id}")
  static createIom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
