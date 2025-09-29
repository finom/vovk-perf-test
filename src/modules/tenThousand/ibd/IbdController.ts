import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibds")
export default class IbdController {
  @operation({
    summary: "Get Ibds",
  })
  @get()
  static getIbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibd",
  })
  @post("{id}")
  static createIbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
