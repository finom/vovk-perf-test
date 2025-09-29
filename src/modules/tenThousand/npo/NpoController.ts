import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npos")
export default class NpoController {
  @operation({
    summary: "Get Npos",
  })
  @get()
  static getNpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npo",
  })
  @post("{id}")
  static createNpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
