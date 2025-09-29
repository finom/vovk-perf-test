import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijms")
export default class IjmController {
  @operation({
    summary: "Get Ijms",
  })
  @get()
  static getIjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijm",
  })
  @post("{id}")
  static createIjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
