import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yr")
export default class YrController {
  @operation({
    summary: "Get Yr",
  })
  @get()
  static getYr = procedure({
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
