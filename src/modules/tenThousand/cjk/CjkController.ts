import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjk")
export default class CjkController {
  @operation({
    summary: "Get Cjk",
  })
  @get()
  static getCjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjk",
  })
  @post("{id}")
  static createCjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
