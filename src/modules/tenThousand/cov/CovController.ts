import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cov")
export default class CovController {
  @operation({
    summary: "Get Cov",
  })
  @get()
  static getCov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cov",
  })
  @post("{id}")
  static createCov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
