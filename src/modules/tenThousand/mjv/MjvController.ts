import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjv")
export default class MjvController {
  @operation({
    summary: "Get Mjv",
  })
  @get()
  static getMjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjv",
  })
  @post("{id}")
  static createMjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
