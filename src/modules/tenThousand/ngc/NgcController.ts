import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngcs")
export default class NgcController {
  @operation({
    summary: "Get Ngcs",
  })
  @get()
  static getNgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngc",
  })
  @post("{id}")
  static createNgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
