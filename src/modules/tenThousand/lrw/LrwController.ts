import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrw")
export default class LrwController {
  @operation({
    summary: "Get Lrw",
  })
  @get()
  static getLrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrw",
  })
  @post("{id}")
  static createLrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
