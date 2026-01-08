import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqw")
export default class BqwController {
  @operation({
    summary: "Get Bqw",
  })
  @get()
  static getBqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqw",
  })
  @post("{id}")
  static createBqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
