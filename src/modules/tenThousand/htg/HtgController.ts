import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htg")
export default class HtgController {
  @operation({
    summary: "Get Htg",
  })
  @get()
  static getHtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htg",
  })
  @post("{id}")
  static createHtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
