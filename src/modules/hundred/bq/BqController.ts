import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bq")
export default class BqController {
  @operation({
    summary: "Get Bq",
  })
  @get()
  static getBq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bq",
  })
  @post("{id}")
  static createBq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
