import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgl")
export default class BglController {
  @operation({
    summary: "Get Bgl",
  })
  @get()
  static getBgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgl",
  })
  @post("{id}")
  static createBgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
