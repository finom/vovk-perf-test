import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggq")
export default class GgqController {
  @operation({
    summary: "Get Ggq",
  })
  @get()
  static getGgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggq",
  })
  @post("{id}")
  static createGgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
