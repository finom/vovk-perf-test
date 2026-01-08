import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwd")
export default class LwdController {
  @operation({
    summary: "Get Lwd",
  })
  @get()
  static getLwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwd",
  })
  @post("{id}")
  static createLwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
