import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brp")
export default class BrpController {
  @operation({
    summary: "Get Brp",
  })
  @get()
  static getBrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brp",
  })
  @post("{id}")
  static createBrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
