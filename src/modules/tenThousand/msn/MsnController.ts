import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msn")
export default class MsnController {
  @operation({
    summary: "Get Msn",
  })
  @get()
  static getMsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msn",
  })
  @post("{id}")
  static createMsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
