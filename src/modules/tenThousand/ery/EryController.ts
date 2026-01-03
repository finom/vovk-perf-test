import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eries")
export default class EryController {
  @operation({
    summary: "Get Eries",
  })
  @get()
  static getEries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ery",
  })
  @post("{id}")
  static createEry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
