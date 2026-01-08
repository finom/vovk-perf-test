import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkr")
export default class BkrController {
  @operation({
    summary: "Get Bkr",
  })
  @get()
  static getBkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkr",
  })
  @post("{id}")
  static createBkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
