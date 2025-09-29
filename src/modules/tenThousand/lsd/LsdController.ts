import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsds")
export default class LsdController {
  @operation({
    summary: "Get Lsds",
  })
  @get()
  static getLsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsd",
  })
  @post("{id}")
  static createLsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
