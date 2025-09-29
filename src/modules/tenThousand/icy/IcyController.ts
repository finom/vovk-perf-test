import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icies")
export default class IcyController {
  @operation({
    summary: "Get Icies",
  })
  @get()
  static getIcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icy",
  })
  @post("{id}")
  static createIcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
