import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcp")
export default class McpController {
  @operation({
    summary: "Get Mcp",
  })
  @get()
  static getMcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcp",
  })
  @post("{id}")
  static createMcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
