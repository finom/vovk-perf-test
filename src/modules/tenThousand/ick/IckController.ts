import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icks")
export default class IckController {
  @operation({
    summary: "Get Icks",
  })
  @get()
  static getIcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ick",
  })
  @post("{id}")
  static createIck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
