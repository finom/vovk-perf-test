import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yv")
export default class YvController {
  @operation({
    summary: "Get Yv",
  })
  @get()
  static getYv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yv",
  })
  @post("{id}")
  static createYv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
