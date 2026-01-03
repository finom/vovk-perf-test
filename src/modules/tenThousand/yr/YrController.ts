import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yrs")
export default class YrController {
  @operation({
    summary: "Get Yrs",
  })
  @get()
  static getYrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yr",
  })
  @post("{id}")
  static createYr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
