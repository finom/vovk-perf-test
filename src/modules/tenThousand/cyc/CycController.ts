import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cycs")
export default class CycController {
  @operation({
    summary: "Get Cycs",
  })
  @get()
  static getCycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyc",
  })
  @post("{id}")
  static createCyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
