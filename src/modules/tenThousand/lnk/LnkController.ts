import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnk")
export default class LnkController {
  @operation({
    summary: "Get Lnk",
  })
  @get()
  static getLnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnk",
  })
  @post("{id}")
  static createLnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
