import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghls")
export default class GhlController {
  @operation({
    summary: "Get Ghls",
  })
  @get()
  static getGhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghl",
  })
  @post("{id}")
  static createGhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
