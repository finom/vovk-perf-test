import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mov")
export default class MovController {
  @operation({
    summary: "Get Mov",
  })
  @get()
  static getMov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mov",
  })
  @post("{id}")
  static createMov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
