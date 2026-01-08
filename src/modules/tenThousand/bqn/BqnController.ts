import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqn")
export default class BqnController {
  @operation({
    summary: "Get Bqn",
  })
  @get()
  static getBqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqn",
  })
  @post("{id}")
  static createBqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
