import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vds")
export default class VdController {
  @operation({
    summary: "Get Vds",
  })
  @get()
  static getVds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vd",
  })
  @post("{id}")
  static createVd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
