import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwus")
export default class IwuController {
  @operation({
    summary: "Get Iwus",
  })
  @get()
  static getIwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwu",
  })
  @post("{id}")
  static createIwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
