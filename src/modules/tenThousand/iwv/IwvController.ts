import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwvs")
export default class IwvController {
  @operation({
    summary: "Get Iwvs",
  })
  @get()
  static getIwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwv",
  })
  @post("{id}")
  static createIwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
