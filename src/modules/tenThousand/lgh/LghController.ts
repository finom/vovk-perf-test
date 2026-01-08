import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgh")
export default class LghController {
  @operation({
    summary: "Get Lgh",
  })
  @get()
  static getLgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgh",
  })
  @post("{id}")
  static createLgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
