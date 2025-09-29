import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eems")
export default class EemController {
  @operation({
    summary: "Get Eems",
  })
  @get()
  static getEems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eem",
  })
  @post("{id}")
  static createEem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
