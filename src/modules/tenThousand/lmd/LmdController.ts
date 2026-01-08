import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmd")
export default class LmdController {
  @operation({
    summary: "Get Lmd",
  })
  @get()
  static getLmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmd",
  })
  @post("{id}")
  static createLmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
