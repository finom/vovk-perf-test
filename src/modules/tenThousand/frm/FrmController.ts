import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frms")
export default class FrmController {
  @operation({
    summary: "Get Frms",
  })
  @get()
  static getFrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frm",
  })
  @post("{id}")
  static createFrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
