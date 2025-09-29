import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwrs")
export default class IwrController {
  @operation({
    summary: "Get Iwrs",
  })
  @get()
  static getIwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwr",
  })
  @post("{id}")
  static createIwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
