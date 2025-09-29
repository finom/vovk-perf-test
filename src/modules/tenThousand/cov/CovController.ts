import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("covs")
export default class CovController {
  @operation({
    summary: "Get Covs",
  })
  @get()
  static getCovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cov",
  })
  @post("{id}")
  static createCov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
