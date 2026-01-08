import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gop")
export default class GopController {
  @operation({
    summary: "Get Gop",
  })
  @get()
  static getGop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gop",
  })
  @post("{id}")
  static createGop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
