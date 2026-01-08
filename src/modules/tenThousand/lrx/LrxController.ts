import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrx")
export default class LrxController {
  @operation({
    summary: "Get Lrx",
  })
  @get()
  static getLrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrx",
  })
  @post("{id}")
  static createLrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
