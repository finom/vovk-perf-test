import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrs")
export default class NrController {
  @operation({
    summary: "Get Nrs",
  })
  @get()
  static getNrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nr",
  })
  @post("{id}")
  static createNr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
