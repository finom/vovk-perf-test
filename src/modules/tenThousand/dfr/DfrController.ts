import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfr")
export default class DfrController {
  @operation({
    summary: "Get Dfr",
  })
  @get()
  static getDfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfr",
  })
  @post("{id}")
  static createDfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
