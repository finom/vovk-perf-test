import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoas")
export default class EoaController {
  @operation({
    summary: "Get Eoas",
  })
  @get()
  static getEoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoa",
  })
  @post("{id}")
  static createEoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
