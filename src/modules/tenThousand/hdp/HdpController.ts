import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdps")
export default class HdpController {
  @operation({
    summary: "Get Hdps",
  })
  @get()
  static getHdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdp",
  })
  @post("{id}")
  static createHdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
