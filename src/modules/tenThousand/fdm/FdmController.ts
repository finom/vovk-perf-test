import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdms")
export default class FdmController {
  @operation({
    summary: "Get Fdms",
  })
  @get()
  static getFdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdm",
  })
  @post("{id}")
  static createFdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
