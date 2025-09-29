import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcns")
export default class FcnController {
  @operation({
    summary: "Get Fcns",
  })
  @get()
  static getFcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcn",
  })
  @post("{id}")
  static createFcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
