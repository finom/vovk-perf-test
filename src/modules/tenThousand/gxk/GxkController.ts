import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxk")
export default class GxkController {
  @operation({
    summary: "Get Gxk",
  })
  @get()
  static getGxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxk",
  })
  @post("{id}")
  static createGxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
