import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqrs")
export default class IqrController {
  @operation({
    summary: "Get Iqrs",
  })
  @get()
  static getIqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqr",
  })
  @post("{id}")
  static createIqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
