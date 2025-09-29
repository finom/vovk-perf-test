import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muzs")
export default class MuzController {
  @operation({
    summary: "Get Muzs",
  })
  @get()
  static getMuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muz",
  })
  @post("{id}")
  static createMuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
