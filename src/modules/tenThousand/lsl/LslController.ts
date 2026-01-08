import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsl")
export default class LslController {
  @operation({
    summary: "Get Lsl",
  })
  @get()
  static getLsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsl",
  })
  @post("{id}")
  static createLsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
