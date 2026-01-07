import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcp")
export default class McpController {
  @operation({
    summary: "Get Mcp",
  })
  @get()
  static getMcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcp",
  })
  @post("{id}")
  static createMcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
