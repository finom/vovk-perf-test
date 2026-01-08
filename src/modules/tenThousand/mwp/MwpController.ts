import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwp")
export default class MwpController {
  @operation({
    summary: "Get Mwp",
  })
  @get()
  static getMwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwp",
  })
  @post("{id}")
  static createMwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
