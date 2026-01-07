import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guj")
export default class GujController {
  @operation({
    summary: "Get Guj",
  })
  @get()
  static getGuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guj",
  })
  @post("{id}")
  static createGuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
