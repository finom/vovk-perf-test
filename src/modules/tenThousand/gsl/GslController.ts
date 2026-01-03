import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsls")
export default class GslController {
  @operation({
    summary: "Get Gsls",
  })
  @get()
  static getGsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsl",
  })
  @post("{id}")
  static createGsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
