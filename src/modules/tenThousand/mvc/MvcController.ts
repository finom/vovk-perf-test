import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvcs")
export default class MvcController {
  @operation({
    summary: "Get Mvcs",
  })
  @get()
  static getMvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvc",
  })
  @post("{id}")
  static createMvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
