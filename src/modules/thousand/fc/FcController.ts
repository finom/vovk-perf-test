import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcs")
export default class FcController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fc",
  })
  @post("{id}")
  static createFc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
