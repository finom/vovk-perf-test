import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijls")
export default class IjlController {
  @operation({
    summary: "Get Ijls",
  })
  @get()
  static getIjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijl",
  })
  @post("{id}")
  static createIjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
