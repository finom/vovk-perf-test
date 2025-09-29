import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsls")
export default class GslController {
  @operation({
    summary: "Get Gsls",
  })
  @get()
  static getGsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsl",
  })
  @post("{id}")
  static createGsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
