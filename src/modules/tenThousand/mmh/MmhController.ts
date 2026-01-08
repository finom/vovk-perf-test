import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmh")
export default class MmhController {
  @operation({
    summary: "Get Mmh",
  })
  @get()
  static getMmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmh",
  })
  @post("{id}")
  static createMmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
