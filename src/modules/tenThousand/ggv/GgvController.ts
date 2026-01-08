import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggv")
export default class GgvController {
  @operation({
    summary: "Get Ggv",
  })
  @get()
  static getGgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggv",
  })
  @post("{id}")
  static createGgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
