import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwrs")
export default class LwrController {
  @operation({
    summary: "Get Lwrs",
  })
  @get()
  static getLwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwr",
  })
  @post("{id}")
  static createLwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
