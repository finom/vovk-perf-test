import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnm")
export default class LnmController {
  @operation({
    summary: "Get Lnm",
  })
  @get()
  static getLnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnm",
  })
  @post("{id}")
  static createLnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
