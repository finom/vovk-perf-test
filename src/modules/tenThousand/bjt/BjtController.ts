import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjts")
export default class BjtController {
  @operation({
    summary: "Get Bjts",
  })
  @get()
  static getBjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjt",
  })
  @post("{id}")
  static createBjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
