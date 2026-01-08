import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bht")
export default class BhtController {
  @operation({
    summary: "Get Bht",
  })
  @get()
  static getBht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bht",
  })
  @post("{id}")
  static createBht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
