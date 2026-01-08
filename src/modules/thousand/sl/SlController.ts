import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sl")
export default class SlController {
  @operation({
    summary: "Get Sl",
  })
  @get()
  static getSl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sl",
  })
  @post("{id}")
  static createSl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
