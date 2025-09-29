import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("os")
export default class OsController {
  @operation({
    summary: "Get Os",
  })
  @get()
  static getOs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Os",
  })
  @post("{id}")
  static createOs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
