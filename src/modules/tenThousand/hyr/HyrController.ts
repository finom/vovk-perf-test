import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyr")
export default class HyrController {
  @operation({
    summary: "Get Hyr",
  })
  @get()
  static getHyr = procedure({
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
