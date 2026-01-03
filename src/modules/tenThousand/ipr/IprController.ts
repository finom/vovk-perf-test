import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iprs")
export default class IprController {
  @operation({
    summary: "Get Iprs",
  })
  @get()
  static getIprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipr",
  })
  @post("{id}")
  static createIpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
