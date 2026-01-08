import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tk")
export default class TkController {
  @operation({
    summary: "Get Tk",
  })
  @get()
  static getTk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tk",
  })
  @post("{id}")
  static createTk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
