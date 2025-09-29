import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czrs")
export default class CzrController {
  @operation({
    summary: "Get Czrs",
  })
  @get()
  static getCzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czr",
  })
  @post("{id}")
  static createCzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
