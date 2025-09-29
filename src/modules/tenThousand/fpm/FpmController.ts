import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpms")
export default class FpmController {
  @operation({
    summary: "Get Fpms",
  })
  @get()
  static getFpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpm",
  })
  @post("{id}")
  static createFpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
