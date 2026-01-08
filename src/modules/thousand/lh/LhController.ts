import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lh")
export default class LhController {
  @operation({
    summary: "Get Lh",
  })
  @get()
  static getLh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lh",
  })
  @post("{id}")
  static createLh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
