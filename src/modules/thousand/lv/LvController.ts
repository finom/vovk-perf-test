import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lv")
export default class LvController {
  @operation({
    summary: "Get Lv",
  })
  @get()
  static getLv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lv",
  })
  @post("{id}")
  static createLv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
