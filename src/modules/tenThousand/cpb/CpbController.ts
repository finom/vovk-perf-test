import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpbs")
export default class CpbController {
  @operation({
    summary: "Get Cpbs",
  })
  @get()
  static getCpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpb",
  })
  @post("{id}")
  static createCpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
