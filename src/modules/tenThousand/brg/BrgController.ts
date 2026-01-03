import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brgs")
export default class BrgController {
  @operation({
    summary: "Get Brgs",
  })
  @get()
  static getBrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brg",
  })
  @post("{id}")
  static createBrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
