import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctv")
export default class CtvController {
  @operation({
    summary: "Get Ctv",
  })
  @get()
  static getCtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctv",
  })
  @post("{id}")
  static createCtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
