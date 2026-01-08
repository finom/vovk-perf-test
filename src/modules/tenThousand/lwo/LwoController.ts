import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwo")
export default class LwoController {
  @operation({
    summary: "Get Lwo",
  })
  @get()
  static getLwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwo",
  })
  @post("{id}")
  static createLwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
