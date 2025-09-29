import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ls")
export default class LsController {
  @operation({
    summary: "Get Ls",
  })
  @get()
  static getLs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ls",
  })
  @post("{id}")
  static createLs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
