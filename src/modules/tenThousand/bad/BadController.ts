import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bad")
export default class BadController {
  @operation({
    summary: "Get Bad",
  })
  @get()
  static getBad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bad",
  })
  @post("{id}")
  static createBad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
