import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipies")
export default class IpyController {
  @operation({
    summary: "Get Ipies",
  })
  @get()
  static getIpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipy",
  })
  @post("{id}")
  static createIpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
