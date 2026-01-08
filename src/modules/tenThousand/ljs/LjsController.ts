import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljs")
export default class LjsController {
  @operation({
    summary: "Get Ljs",
  })
  @get()
  static getLjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljs",
  })
  @post("{id}")
  static createLjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
