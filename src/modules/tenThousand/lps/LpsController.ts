import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lps")
export default class LpsController {
  @operation({
    summary: "Get Lps",
  })
  @get()
  static getLps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lps",
  })
  @post("{id}")
  static createLps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
