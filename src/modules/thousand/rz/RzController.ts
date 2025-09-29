import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rzs")
export default class RzController {
  @operation({
    summary: "Get Rzs",
  })
  @get()
  static getRzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rz",
  })
  @post("{id}")
  static createRz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
