import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgp")
export default class FgpController {
  @operation({
    summary: "Get Fgp",
  })
  @get()
  static getFgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgp",
  })
  @post("{id}")
  static createFgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
