import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdies")
export default class FdyController {
  @operation({
    summary: "Get Fdies",
  })
  @get()
  static getFdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdy",
  })
  @post("{id}")
  static createFdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
