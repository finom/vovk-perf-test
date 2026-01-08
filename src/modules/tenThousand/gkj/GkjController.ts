import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkj")
export default class GkjController {
  @operation({
    summary: "Get Gkj",
  })
  @get()
  static getGkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkj",
  })
  @post("{id}")
  static createGkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
