import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htj")
export default class HtjController {
  @operation({
    summary: "Get Htj",
  })
  @get()
  static getHtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htj",
  })
  @post("{id}")
  static createHtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
