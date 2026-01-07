import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyr")
export default class EyrController {
  @operation({
    summary: "Get Eyr",
  })
  @get()
  static getEyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyr",
  })
  @post("{id}")
  static createEyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
