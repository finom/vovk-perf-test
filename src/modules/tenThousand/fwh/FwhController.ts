import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwhs")
export default class FwhController {
  @operation({
    summary: "Get Fwhs",
  })
  @get()
  static getFwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwh",
  })
  @post("{id}")
  static createFwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
