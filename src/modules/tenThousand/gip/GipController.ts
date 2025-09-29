import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gips")
export default class GipController {
  @operation({
    summary: "Get Gips",
  })
  @get()
  static getGips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gip",
  })
  @post("{id}")
  static createGip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
