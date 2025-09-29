import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mczs")
export default class MczController {
  @operation({
    summary: "Get Mczs",
  })
  @get()
  static getMczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcz",
  })
  @post("{id}")
  static createMcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
