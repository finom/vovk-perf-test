import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icp")
export default class IcpController {
  @operation({
    summary: "Get Icp",
  })
  @get()
  static getIcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icp",
  })
  @post("{id}")
  static createIcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
