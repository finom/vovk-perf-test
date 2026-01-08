import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqx")
export default class BqxController {
  @operation({
    summary: "Get Bqx",
  })
  @get()
  static getBqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqx",
  })
  @post("{id}")
  static createBqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
