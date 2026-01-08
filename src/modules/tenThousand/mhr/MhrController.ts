import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhr")
export default class MhrController {
  @operation({
    summary: "Get Mhr",
  })
  @get()
  static getMhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhr",
  })
  @post("{id}")
  static createMhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
