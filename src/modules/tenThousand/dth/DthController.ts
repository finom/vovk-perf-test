import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dths")
export default class DthController {
  @operation({
    summary: "Get Dths",
  })
  @get()
  static getDths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dth",
  })
  @post("{id}")
  static createDth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
