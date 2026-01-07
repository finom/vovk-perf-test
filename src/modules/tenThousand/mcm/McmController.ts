import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcm")
export default class McmController {
  @operation({
    summary: "Get Mcm",
  })
  @get()
  static getMcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcm",
  })
  @post("{id}")
  static createMcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
