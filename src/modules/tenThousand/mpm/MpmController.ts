import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpms")
export default class MpmController {
  @operation({
    summary: "Get Mpms",
  })
  @get()
  static getMpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpm",
  })
  @post("{id}")
  static createMpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
