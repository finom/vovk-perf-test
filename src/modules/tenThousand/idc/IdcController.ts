import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idcs")
export default class IdcController {
  @operation({
    summary: "Get Idcs",
  })
  @get()
  static getIdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idc",
  })
  @post("{id}")
  static createIdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
