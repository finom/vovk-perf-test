import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aies")
export default class AieController {
  @operation({
    summary: "Get Aies",
  })
  @get()
  static getAies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aie",
  })
  @post("{id}")
  static createAie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
