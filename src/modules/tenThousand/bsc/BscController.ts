import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bscs")
export default class BscController {
  @operation({
    summary: "Get Bscs",
  })
  @get()
  static getBscs = procedure({
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
