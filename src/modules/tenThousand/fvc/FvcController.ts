import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvcs")
export default class FvcController {
  @operation({
    summary: "Get Fvcs",
  })
  @get()
  static getFvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvc",
  })
  @post("{id}")
  static createFvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
