import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cews")
export default class CewController {
  @operation({
    summary: "Get Cews",
  })
  @get()
  static getCews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cew",
  })
  @post("{id}")
  static createCew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
