import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pis")
export default class PiController {
  @operation({
    summary: "Get Pis",
  })
  @get()
  static getPis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pi",
  })
  @post("{id}")
  static createPi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
