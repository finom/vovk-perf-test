import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpr")
export default class MprController {
  @operation({
    summary: "Get Mpr",
  })
  @get()
  static getMpr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpr",
  })
  @post("{id}")
  static createMpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
