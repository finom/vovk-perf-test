import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhbs")
export default class BhbController {
  @operation({
    summary: "Get Bhbs",
  })
  @get()
  static getBhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhb",
  })
  @post("{id}")
  static createBhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
