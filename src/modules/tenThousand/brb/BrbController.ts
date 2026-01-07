import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brb")
export default class BrbController {
  @operation({
    summary: "Get Brb",
  })
  @get()
  static getBrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brb",
  })
  @post("{id}")
  static createBrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
