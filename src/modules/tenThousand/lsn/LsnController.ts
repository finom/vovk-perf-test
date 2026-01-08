import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsn")
export default class LsnController {
  @operation({
    summary: "Get Lsn",
  })
  @get()
  static getLsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsn",
  })
  @post("{id}")
  static createLsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
