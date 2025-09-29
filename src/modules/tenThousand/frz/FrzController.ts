import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frzs")
export default class FrzController {
  @operation({
    summary: "Get Frzs",
  })
  @get()
  static getFrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frz",
  })
  @post("{id}")
  static createFrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
