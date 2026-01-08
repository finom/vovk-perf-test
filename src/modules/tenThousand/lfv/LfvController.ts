import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfv")
export default class LfvController {
  @operation({
    summary: "Get Lfv",
  })
  @get()
  static getLfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfv",
  })
  @post("{id}")
  static createLfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
