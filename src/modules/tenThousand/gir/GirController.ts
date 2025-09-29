import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("girs")
export default class GirController {
  @operation({
    summary: "Get Girs",
  })
  @get()
  static getGirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gir",
  })
  @post("{id}")
  static createGir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
