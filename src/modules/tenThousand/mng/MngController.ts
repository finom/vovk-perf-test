import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mngs")
export default class MngController {
  @operation({
    summary: "Get Mngs",
  })
  @get()
  static getMngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mng",
  })
  @post("{id}")
  static createMng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
