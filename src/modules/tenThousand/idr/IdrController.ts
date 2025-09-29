import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idrs")
export default class IdrController {
  @operation({
    summary: "Get Idrs",
  })
  @get()
  static getIdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idr",
  })
  @post("{id}")
  static createIdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
