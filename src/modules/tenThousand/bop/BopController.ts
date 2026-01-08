import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bop")
export default class BopController {
  @operation({
    summary: "Get Bop",
  })
  @get()
  static getBop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bop",
  })
  @post("{id}")
  static createBop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
