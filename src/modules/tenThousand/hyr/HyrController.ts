import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyrs")
export default class HyrController {
  @operation({
    summary: "Get Hyrs",
  })
  @get()
  static getHyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyr",
  })
  @post("{id}")
  static createHyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
