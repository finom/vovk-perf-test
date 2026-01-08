import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgq")
export default class FgqController {
  @operation({
    summary: "Get Fgq",
  })
  @get()
  static getFgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgq",
  })
  @post("{id}")
  static createFgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
