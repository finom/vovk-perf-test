import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhp")
export default class BhpController {
  @operation({
    summary: "Get Bhp",
  })
  @get()
  static getBhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhp",
  })
  @post("{id}")
  static createBhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
