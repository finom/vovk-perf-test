import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxp")
export default class GxpController {
  @operation({
    summary: "Get Gxp",
  })
  @get()
  static getGxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxp",
  })
  @post("{id}")
  static createGxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
