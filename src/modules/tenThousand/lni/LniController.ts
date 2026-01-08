import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lni")
export default class LniController {
  @operation({
    summary: "Get Lni",
  })
  @get()
  static getLni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lni",
  })
  @post("{id}")
  static createLni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
