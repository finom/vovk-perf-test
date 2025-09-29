import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqhs")
export default class IqhController {
  @operation({
    summary: "Get Iqhs",
  })
  @get()
  static getIqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqh",
  })
  @post("{id}")
  static createIqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
