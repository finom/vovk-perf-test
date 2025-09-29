import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngfs")
export default class NgfController {
  @operation({
    summary: "Get Ngfs",
  })
  @get()
  static getNgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngf",
  })
  @post("{id}")
  static createNgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
