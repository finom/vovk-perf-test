import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggp")
export default class GgpController {
  @operation({
    summary: "Get Ggp",
  })
  @get()
  static getGgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggp",
  })
  @post("{id}")
  static createGgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
