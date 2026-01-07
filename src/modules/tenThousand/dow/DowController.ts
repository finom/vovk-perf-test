import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dow")
export default class DowController {
  @operation({
    summary: "Get Dow",
  })
  @get()
  static getDow = procedure({
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
