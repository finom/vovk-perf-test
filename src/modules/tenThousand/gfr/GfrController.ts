import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfr")
export default class GfrController {
  @operation({
    summary: "Get Gfr",
  })
  @get()
  static getGfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfr",
  })
  @post("{id}")
  static createGfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
