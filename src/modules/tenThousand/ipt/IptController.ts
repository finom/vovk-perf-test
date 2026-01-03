import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipts")
export default class IptController {
  @operation({
    summary: "Get Ipts",
  })
  @get()
  static getIpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipt",
  })
  @post("{id}")
  static createIpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
