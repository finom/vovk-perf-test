import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmhs")
export default class CmhController {
  @operation({
    summary: "Get Cmhs",
  })
  @get()
  static getCmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmh",
  })
  @post("{id}")
  static createCmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
