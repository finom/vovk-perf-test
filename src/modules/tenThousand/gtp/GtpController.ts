import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtp")
export default class GtpController {
  @operation({
    summary: "Get Gtp",
  })
  @get()
  static getGtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtp",
  })
  @post("{id}")
  static createGtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
