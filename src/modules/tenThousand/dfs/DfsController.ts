import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfs")
export default class DfsController {
  @operation({
    summary: "Get Dfs",
  })
  @get()
  static getDfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfs",
  })
  @post("{id}")
  static createDfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
