import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffcs")
export default class FfcController {
  @operation({
    summary: "Get Ffcs",
  })
  @get()
  static getFfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffc",
  })
  @post("{id}")
  static createFfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
