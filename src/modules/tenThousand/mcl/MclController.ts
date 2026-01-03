import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcls")
export default class MclController {
  @operation({
    summary: "Get Mcls",
  })
  @get()
  static getMcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcl",
  })
  @post("{id}")
  static createMcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
