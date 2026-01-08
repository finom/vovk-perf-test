import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnq")
export default class LnqController {
  @operation({
    summary: "Get Lnq",
  })
  @get()
  static getLnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnq",
  })
  @post("{id}")
  static createLnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
