import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drzs")
export default class DrzController {
  @operation({
    summary: "Get Drzs",
  })
  @get()
  static getDrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drz",
  })
  @post("{id}")
  static createDrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
