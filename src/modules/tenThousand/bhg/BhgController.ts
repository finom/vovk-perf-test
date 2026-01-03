import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhgs")
export default class BhgController {
  @operation({
    summary: "Get Bhgs",
  })
  @get()
  static getBhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhg",
  })
  @post("{id}")
  static createBhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
