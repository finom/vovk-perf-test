import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpm")
export default class MpmController {
  @operation({
    summary: "Get Mpm",
  })
  @get()
  static getMpm = procedure({
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
