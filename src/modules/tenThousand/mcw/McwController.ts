import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcws")
export default class McwController {
  @operation({
    summary: "Get Mcws",
  })
  @get()
  static getMcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcw",
  })
  @post("{id}")
  static createMcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
