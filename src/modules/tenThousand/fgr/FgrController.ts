import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgr")
export default class FgrController {
  @operation({
    summary: "Get Fgr",
  })
  @get()
  static getFgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgr",
  })
  @post("{id}")
  static createFgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
