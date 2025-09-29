import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cscs")
export default class CscController {
  @operation({
    summary: "Get Cscs",
  })
  @get()
  static getCscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csc",
  })
  @post("{id}")
  static createCsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
