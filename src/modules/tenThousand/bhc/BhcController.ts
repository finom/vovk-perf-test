import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhc")
export default class BhcController {
  @operation({
    summary: "Get Bhc",
  })
  @get()
  static getBhc = procedure({
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
