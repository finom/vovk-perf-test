import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnx")
export default class LnxController {
  @operation({
    summary: "Get Lnx",
  })
  @get()
  static getLnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnx",
  })
  @post("{id}")
  static createLnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
