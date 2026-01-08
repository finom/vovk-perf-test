import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmr")
export default class MmrController {
  @operation({
    summary: "Get Mmr",
  })
  @get()
  static getMmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmr",
  })
  @post("{id}")
  static createMmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
