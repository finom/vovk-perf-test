import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgt")
export default class BgtController {
  @operation({
    summary: "Get Bgt",
  })
  @get()
  static getBgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgt",
  })
  @post("{id}")
  static createBgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
