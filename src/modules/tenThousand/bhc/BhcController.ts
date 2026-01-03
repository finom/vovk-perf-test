import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhcs")
export default class BhcController {
  @operation({
    summary: "Get Bhcs",
  })
  @get()
  static getBhcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhc",
  })
  @post("{id}")
  static createBhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
