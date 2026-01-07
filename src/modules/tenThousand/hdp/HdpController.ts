import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdp")
export default class HdpController {
  @operation({
    summary: "Get Hdp",
  })
  @get()
  static getHdp = procedure({
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
