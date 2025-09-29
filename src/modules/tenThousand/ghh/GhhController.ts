import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghhs")
export default class GhhController {
  @operation({
    summary: "Get Ghhs",
  })
  @get()
  static getGhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghh",
  })
  @post("{id}")
  static createGhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
