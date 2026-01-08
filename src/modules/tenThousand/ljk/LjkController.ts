import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljk")
export default class LjkController {
  @operation({
    summary: "Get Ljk",
  })
  @get()
  static getLjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljk",
  })
  @post("{id}")
  static createLjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
