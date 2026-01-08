import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djv")
export default class DjvController {
  @operation({
    summary: "Get Djv",
  })
  @get()
  static getDjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djv",
  })
  @post("{id}")
  static createDjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
