import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgl")
export default class LglController {
  @operation({
    summary: "Get Lgl",
  })
  @get()
  static getLgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgl",
  })
  @post("{id}")
  static createLgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
