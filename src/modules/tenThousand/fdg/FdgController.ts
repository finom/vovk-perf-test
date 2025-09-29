import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdgs")
export default class FdgController {
  @operation({
    summary: "Get Fdgs",
  })
  @get()
  static getFdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdg",
  })
  @post("{id}")
  static createFdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
