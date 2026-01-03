import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwies")
export default class BwyController {
  @operation({
    summary: "Get Bwies",
  })
  @get()
  static getBwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwy",
  })
  @post("{id}")
  static createBwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
