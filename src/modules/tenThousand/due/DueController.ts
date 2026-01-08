import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("due")
export default class DueController {
  @operation({
    summary: "Get Due",
  })
  @get()
  static getDue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Due",
  })
  @post("{id}")
  static createDue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
