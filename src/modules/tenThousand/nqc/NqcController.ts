import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqcs")
export default class NqcController {
  @operation({
    summary: "Get Nqcs",
  })
  @get()
  static getNqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqc",
  })
  @post("{id}")
  static createNqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
