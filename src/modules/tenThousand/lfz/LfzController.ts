import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfz")
export default class LfzController {
  @operation({
    summary: "Get Lfz",
  })
  @get()
  static getLfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfz",
  })
  @post("{id}")
  static createLfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
