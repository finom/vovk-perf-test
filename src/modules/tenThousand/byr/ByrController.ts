import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byrs")
export default class ByrController {
  @operation({
    summary: "Get Byrs",
  })
  @get()
  static getByrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byr",
  })
  @post("{id}")
  static createByr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
