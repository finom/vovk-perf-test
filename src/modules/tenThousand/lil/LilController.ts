import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lil")
export default class LilController {
  @operation({
    summary: "Get Lil",
  })
  @get()
  static getLil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lil",
  })
  @post("{id}")
  static createLil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
