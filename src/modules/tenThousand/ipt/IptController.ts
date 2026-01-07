import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipt")
export default class IptController {
  @operation({
    summary: "Get Ipt",
  })
  @get()
  static getIpt = procedure({
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
