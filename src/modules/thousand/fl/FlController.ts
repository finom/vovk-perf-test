import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fl")
export default class FlController {
  @operation({
    summary: "Get Fl",
  })
  @get()
  static getFl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fl",
  })
  @post("{id}")
  static createFl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
