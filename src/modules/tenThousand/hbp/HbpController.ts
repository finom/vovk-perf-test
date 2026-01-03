import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbps")
export default class HbpController {
  @operation({
    summary: "Get Hbps",
  })
  @get()
  static getHbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbp",
  })
  @post("{id}")
  static createHbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
