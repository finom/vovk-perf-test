import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azy")
export default class AzyController {
  @operation({
    summary: "Get Azy",
  })
  @get()
  static getAzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azy",
  })
  @post("{id}")
  static createAzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
