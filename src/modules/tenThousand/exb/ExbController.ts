import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exbs")
export default class ExbController {
  @operation({
    summary: "Get Exbs",
  })
  @get()
  static getExbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exb",
  })
  @post("{id}")
  static createExb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
