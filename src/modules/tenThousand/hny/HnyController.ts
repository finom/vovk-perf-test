import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnies")
export default class HnyController {
  @operation({
    summary: "Get Hnies",
  })
  @get()
  static getHnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hny",
  })
  @post("{id}")
  static createHny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
