import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("em")
export default class EmController {
  @operation({
    summary: "Get Em",
  })
  @get()
  static getEm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Em",
  })
  @post("{id}")
  static createEm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
