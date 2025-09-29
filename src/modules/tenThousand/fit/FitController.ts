import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fits")
export default class FitController {
  @operation({
    summary: "Get Fits",
  })
  @get()
  static getFits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fit",
  })
  @post("{id}")
  static createFit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
