import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddms")
export default class DdmController {
  @operation({
    summary: "Get Ddms",
  })
  @get()
  static getDdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddm",
  })
  @post("{id}")
  static createDdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
