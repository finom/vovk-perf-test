import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfs")
export default class BfsController {
  @operation({
    summary: "Get Bfs",
  })
  @get()
  static getBfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfs",
  })
  @post("{id}")
  static createBfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
