import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyvs")
export default class GyvController {
  @operation({
    summary: "Get Gyvs",
  })
  @get()
  static getGyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyv",
  })
  @post("{id}")
  static createGyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
