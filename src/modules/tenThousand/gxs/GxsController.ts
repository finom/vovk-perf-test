import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxs")
export default class GxsController {
  @operation({
    summary: "Get Gxs",
  })
  @get()
  static getGxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxs",
  })
  @post("{id}")
  static createGxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
