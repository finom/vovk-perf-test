import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihrs")
export default class IhrController {
  @operation({
    summary: "Get Ihrs",
  })
  @get()
  static getIhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihr",
  })
  @post("{id}")
  static createIhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
