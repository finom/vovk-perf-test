import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhr")
export default class LhrController {
  @operation({
    summary: "Get Lhr",
  })
  @get()
  static getLhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhr",
  })
  @post("{id}")
  static createLhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
