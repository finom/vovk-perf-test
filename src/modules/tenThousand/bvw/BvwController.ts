import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvw")
export default class BvwController {
  @operation({
    summary: "Get Bvw",
  })
  @get()
  static getBvw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvw",
  })
  @post("{id}")
  static createBvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
