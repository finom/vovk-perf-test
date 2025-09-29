import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brzs")
export default class BrzController {
  @operation({
    summary: "Get Brzs",
  })
  @get()
  static getBrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brz",
  })
  @post("{id}")
  static createBrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
