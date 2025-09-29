import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghgs")
export default class GhgController {
  @operation({
    summary: "Get Ghgs",
  })
  @get()
  static getGhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghg",
  })
  @post("{id}")
  static createGhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
