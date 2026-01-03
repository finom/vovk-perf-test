import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhes")
export default class BheController {
  @operation({
    summary: "Get Bhes",
  })
  @get()
  static getBhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhe",
  })
  @post("{id}")
  static createBhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
