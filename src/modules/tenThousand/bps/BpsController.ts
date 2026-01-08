import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bps")
export default class BpsController {
  @operation({
    summary: "Get Bps",
  })
  @get()
  static getBps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bps",
  })
  @post("{id}")
  static createBps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
