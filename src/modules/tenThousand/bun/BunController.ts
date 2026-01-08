import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bun")
export default class BunController {
  @operation({
    summary: "Get Bun",
  })
  @get()
  static getBun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bun",
  })
  @post("{id}")
  static createBun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
