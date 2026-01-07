import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erv")
export default class ErvController {
  @operation({
    summary: "Get Erv",
  })
  @get()
  static getErv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erv",
  })
  @post("{id}")
  static createErv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
