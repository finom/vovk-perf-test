import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxm")
export default class GxmController {
  @operation({
    summary: "Get Gxm",
  })
  @get()
  static getGxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxm",
  })
  @post("{id}")
  static createGxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
