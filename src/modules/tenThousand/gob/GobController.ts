import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gobs")
export default class GobController {
  @operation({
    summary: "Get Gobs",
  })
  @get()
  static getGobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gob",
  })
  @post("{id}")
  static createGob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
