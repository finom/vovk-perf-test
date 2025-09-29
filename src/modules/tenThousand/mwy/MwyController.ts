import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwies")
export default class MwyController {
  @operation({
    summary: "Get Mwies",
  })
  @get()
  static getMwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwy",
  })
  @post("{id}")
  static createMwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
