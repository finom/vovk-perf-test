import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsc")
export default class BscController {
  @operation({
    summary: "Get Bsc",
  })
  @get()
  static getBsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsc",
  })
  @post("{id}")
  static createBsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
