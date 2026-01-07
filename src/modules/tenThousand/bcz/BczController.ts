import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcz")
export default class BczController {
  @operation({
    summary: "Get Bcz",
  })
  @get()
  static getBcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcz",
  })
  @post("{id}")
  static createBcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
