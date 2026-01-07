import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brn")
export default class BrnController {
  @operation({
    summary: "Get Brn",
  })
  @get()
  static getBrn = procedure({
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
