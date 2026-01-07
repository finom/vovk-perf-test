import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcj")
export default class McjController {
  @operation({
    summary: "Get Mcj",
  })
  @get()
  static getMcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcj",
  })
  @post("{id}")
  static createMcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
