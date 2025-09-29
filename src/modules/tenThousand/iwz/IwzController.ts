import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwzs")
export default class IwzController {
  @operation({
    summary: "Get Iwzs",
  })
  @get()
  static getIwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwz",
  })
  @post("{id}")
  static createIwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
