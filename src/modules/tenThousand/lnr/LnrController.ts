import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnr")
export default class LnrController {
  @operation({
    summary: "Get Lnr",
  })
  @get()
  static getLnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnr",
  })
  @post("{id}")
  static createLnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
