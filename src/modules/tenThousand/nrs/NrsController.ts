import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrs")
export default class NrsController {
  @operation({
    summary: "Get Nrs",
  })
  @get()
  static getNrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrs",
  })
  @post("{id}")
  static createNrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
