import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fycs")
export default class FycController {
  @operation({
    summary: "Get Fycs",
  })
  @get()
  static getFycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyc",
  })
  @post("{id}")
  static createFyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
