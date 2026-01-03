import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvds")
export default class BvdController {
  @operation({
    summary: "Get Bvds",
  })
  @get()
  static getBvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvd",
  })
  @post("{id}")
  static createBvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
