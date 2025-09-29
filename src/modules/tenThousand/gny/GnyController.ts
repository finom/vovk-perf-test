import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnies")
export default class GnyController {
  @operation({
    summary: "Get Gnies",
  })
  @get()
  static getGnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gny",
  })
  @post("{id}")
  static createGny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
