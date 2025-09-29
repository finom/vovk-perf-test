import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euys")
export default class EuyController {
  @operation({
    summary: "Get Euys",
  })
  @get()
  static getEuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euy",
  })
  @post("{id}")
  static createEuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
