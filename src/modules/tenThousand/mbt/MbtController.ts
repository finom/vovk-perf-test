import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbts")
export default class MbtController {
  @operation({
    summary: "Get Mbts",
  })
  @get()
  static getMbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbt",
  })
  @post("{id}")
  static createMbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
