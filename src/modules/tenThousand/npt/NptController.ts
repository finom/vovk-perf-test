import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npts")
export default class NptController {
  @operation({
    summary: "Get Npts",
  })
  @get()
  static getNpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npt",
  })
  @post("{id}")
  static createNpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
