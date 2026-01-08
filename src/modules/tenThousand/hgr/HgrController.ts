import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgr")
export default class HgrController {
  @operation({
    summary: "Get Hgr",
  })
  @get()
  static getHgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgr",
  })
  @post("{id}")
  static createHgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
