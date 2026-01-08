import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqy")
export default class BqyController {
  @operation({
    summary: "Get Bqy",
  })
  @get()
  static getBqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqy",
  })
  @post("{id}")
  static createBqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
