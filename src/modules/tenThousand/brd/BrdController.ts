import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brd")
export default class BrdController {
  @operation({
    summary: "Get Brd",
  })
  @get()
  static getBrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brd",
  })
  @post("{id}")
  static createBrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
