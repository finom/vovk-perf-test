import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggr")
export default class GgrController {
  @operation({
    summary: "Get Ggr",
  })
  @get()
  static getGgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggr",
  })
  @post("{id}")
  static createGgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
