import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fg")
export default class FgController {
  @operation({
    summary: "Get Fg",
  })
  @get()
  static getFg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fg",
  })
  @post("{id}")
  static createFg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
