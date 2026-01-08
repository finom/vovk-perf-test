import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggc")
export default class GgcController {
  @operation({
    summary: "Get Ggc",
  })
  @get()
  static getGgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggc",
  })
  @post("{id}")
  static createGgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
