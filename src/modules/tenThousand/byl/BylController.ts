import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byl")
export default class BylController {
  @operation({
    summary: "Get Byl",
  })
  @get()
  static getByl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byl",
  })
  @post("{id}")
  static createByl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
