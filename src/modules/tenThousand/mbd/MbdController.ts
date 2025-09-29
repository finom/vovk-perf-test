import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbds")
export default class MbdController {
  @operation({
    summary: "Get Mbds",
  })
  @get()
  static getMbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbd",
  })
  @post("{id}")
  static createMbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
