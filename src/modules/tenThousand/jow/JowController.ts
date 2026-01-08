import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jow")
export default class JowController {
  @operation({
    summary: "Get Jow",
  })
  @get()
  static getJow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jow",
  })
  @post("{id}")
  static createJow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
