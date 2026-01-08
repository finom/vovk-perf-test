import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwp")
export default class BwpController {
  @operation({
    summary: "Get Bwp",
  })
  @get()
  static getBwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwp",
  })
  @post("{id}")
  static createBwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
