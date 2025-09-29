import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncrs")
export default class NcrController {
  @operation({
    summary: "Get Ncrs",
  })
  @get()
  static getNcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncr",
  })
  @post("{id}")
  static createNcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
