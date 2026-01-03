import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isps")
export default class IspController {
  @operation({
    summary: "Get Isps",
  })
  @get()
  static getIsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isp",
  })
  @post("{id}")
  static createIsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
