import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqv")
export default class BqvController {
  @operation({
    summary: "Get Bqv",
  })
  @get()
  static getBqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqv",
  })
  @post("{id}")
  static createBqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
