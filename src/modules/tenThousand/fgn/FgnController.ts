import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgn")
export default class FgnController {
  @operation({
    summary: "Get Fgn",
  })
  @get()
  static getFgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgn",
  })
  @post("{id}")
  static createFgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
