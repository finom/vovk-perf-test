import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpi")
export default class LpiController {
  @operation({
    summary: "Get Lpi",
  })
  @get()
  static getLpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpi",
  })
  @post("{id}")
  static createLpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
