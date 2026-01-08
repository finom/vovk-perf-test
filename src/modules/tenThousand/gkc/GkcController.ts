import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkc")
export default class GkcController {
  @operation({
    summary: "Get Gkc",
  })
  @get()
  static getGkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkc",
  })
  @post("{id}")
  static createGkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
