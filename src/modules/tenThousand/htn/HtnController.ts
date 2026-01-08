import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htn")
export default class HtnController {
  @operation({
    summary: "Get Htn",
  })
  @get()
  static getHtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htn",
  })
  @post("{id}")
  static createHtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
