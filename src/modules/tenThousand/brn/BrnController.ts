import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brns")
export default class BrnController {
  @operation({
    summary: "Get Brns",
  })
  @get()
  static getBrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brn",
  })
  @post("{id}")
  static createBrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
