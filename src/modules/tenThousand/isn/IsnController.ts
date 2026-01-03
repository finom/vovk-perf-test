import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isns")
export default class IsnController {
  @operation({
    summary: "Get Isns",
  })
  @get()
  static getIsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isn",
  })
  @post("{id}")
  static createIsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
