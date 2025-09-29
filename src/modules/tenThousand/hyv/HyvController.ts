import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyvs")
export default class HyvController {
  @operation({
    summary: "Get Hyvs",
  })
  @get()
  static getHyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyv",
  })
  @post("{id}")
  static createHyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
