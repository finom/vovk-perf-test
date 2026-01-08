import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bll")
export default class BllController {
  @operation({
    summary: "Get Bll",
  })
  @get()
  static getBll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bll",
  })
  @post("{id}")
  static createBll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
