import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpd")
export default class LpdController {
  @operation({
    summary: "Get Lpd",
  })
  @get()
  static getLpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpd",
  })
  @post("{id}")
  static createLpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
