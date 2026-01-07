import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnx")
export default class LnxController {
  @operation({
    summary: "Get Lnx",
  })
  @get()
  static getLnx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnx",
  })
  @post("{id}")
  static createLnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
