import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgn")
export default class BgnController {
  @operation({
    summary: "Get Bgn",
  })
  @get()
  static getBgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgn",
  })
  @post("{id}")
  static createBgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
