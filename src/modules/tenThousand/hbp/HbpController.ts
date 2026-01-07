import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbp")
export default class HbpController {
  @operation({
    summary: "Get Hbp",
  })
  @get()
  static getHbp = procedure({
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
