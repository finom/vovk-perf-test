import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wd")
export default class WdController {
  @operation({
    summary: "Get Wd",
  })
  @get()
  static getWd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wd",
  })
  @post("{id}")
  static createWd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
