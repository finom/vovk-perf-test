import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcr")
export default class McrController {
  @operation({
    summary: "Get Mcr",
  })
  @get()
  static getMcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcr",
  })
  @post("{id}")
  static createMcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
