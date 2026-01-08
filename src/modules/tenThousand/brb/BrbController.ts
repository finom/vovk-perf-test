import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brb")
export default class BrbController {
  @operation({
    summary: "Get Brb",
  })
  @get()
  static getBrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brb",
  })
  @post("{id}")
  static createBrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
