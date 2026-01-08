import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bse")
export default class BseController {
  @operation({
    summary: "Get Bse",
  })
  @get()
  static getBse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bse",
  })
  @post("{id}")
  static createBse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
