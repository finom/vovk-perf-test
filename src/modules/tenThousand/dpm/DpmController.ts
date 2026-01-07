import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpm")
export default class DpmController {
  @operation({
    summary: "Get Dpm",
  })
  @get()
  static getDpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpm",
  })
  @post("{id}")
  static createDpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
