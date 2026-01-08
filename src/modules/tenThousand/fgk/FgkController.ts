import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgk")
export default class FgkController {
  @operation({
    summary: "Get Fgk",
  })
  @get()
  static getFgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgk",
  })
  @post("{id}")
  static createFgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
