import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbfs")
export default class GbfController {
  @operation({
    summary: "Get Gbfs",
  })
  @get()
  static getGbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbf",
  })
  @post("{id}")
  static createGbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
