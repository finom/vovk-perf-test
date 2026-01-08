import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ss")
export default class SsController {
  @operation({
    summary: "Get Ss",
  })
  @get()
  static getSs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ss",
  })
  @post("{id}")
  static createSs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
