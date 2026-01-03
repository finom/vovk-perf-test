import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcies")
export default class BcyController {
  @operation({
    summary: "Get Bcies",
  })
  @get()
  static getBcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcy",
  })
  @post("{id}")
  static createBcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
