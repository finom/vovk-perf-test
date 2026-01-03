import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irvs")
export default class IrvController {
  @operation({
    summary: "Get Irvs",
  })
  @get()
  static getIrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irv",
  })
  @post("{id}")
  static createIrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
