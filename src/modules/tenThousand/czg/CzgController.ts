import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czgs")
export default class CzgController {
  @operation({
    summary: "Get Czgs",
  })
  @get()
  static getCzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czg",
  })
  @post("{id}")
  static createCzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
