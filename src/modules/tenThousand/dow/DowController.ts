import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dows")
export default class DowController {
  @operation({
    summary: "Get Dows",
  })
  @get()
  static getDows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dow",
  })
  @post("{id}")
  static createDow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
