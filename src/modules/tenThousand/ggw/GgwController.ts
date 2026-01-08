import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggw")
export default class GgwController {
  @operation({
    summary: "Get Ggw",
  })
  @get()
  static getGgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggw",
  })
  @post("{id}")
  static createGgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
