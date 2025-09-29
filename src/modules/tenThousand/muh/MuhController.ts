import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muhs")
export default class MuhController {
  @operation({
    summary: "Get Muhs",
  })
  @get()
  static getMuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muh",
  })
  @post("{id}")
  static createMuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
