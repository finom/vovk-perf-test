import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqh")
export default class BqhController {
  @operation({
    summary: "Get Bqh",
  })
  @get()
  static getBqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqh",
  })
  @post("{id}")
  static createBqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
