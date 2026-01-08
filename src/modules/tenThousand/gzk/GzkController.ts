import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzk")
export default class GzkController {
  @operation({
    summary: "Get Gzk",
  })
  @get()
  static getGzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzk",
  })
  @post("{id}")
  static createGzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
