import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpk")
export default class MpkController {
  @operation({
    summary: "Get Mpk",
  })
  @get()
  static getMpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpk",
  })
  @post("{id}")
  static createMpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
