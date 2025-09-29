import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbvs")
export default class GbvController {
  @operation({
    summary: "Get Gbvs",
  })
  @get()
  static getGbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbv",
  })
  @post("{id}")
  static createGbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
