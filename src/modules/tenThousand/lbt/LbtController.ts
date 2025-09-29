import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbts")
export default class LbtController {
  @operation({
    summary: "Get Lbts",
  })
  @get()
  static getLbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbt",
  })
  @post("{id}")
  static createLbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
