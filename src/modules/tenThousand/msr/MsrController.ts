import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msrs")
export default class MsrController {
  @operation({
    summary: "Get Msrs",
  })
  @get()
  static getMsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msr",
  })
  @post("{id}")
  static createMsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
