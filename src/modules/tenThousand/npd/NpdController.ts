import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npds")
export default class NpdController {
  @operation({
    summary: "Get Npds",
  })
  @get()
  static getNpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npd",
  })
  @post("{id}")
  static createNpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
