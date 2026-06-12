import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcp")
export default class McpController {
  @operation({
    summary: "Get Mcp",
  })
  @get()
  static getMcp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcp",
  })
  @post("{id}")
  static createMcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
