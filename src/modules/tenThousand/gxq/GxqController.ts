import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxq")
export default class GxqController {
  @operation({
    summary: "Get Gxq",
  })
  @get()
  static getGxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxq",
  })
  @post("{id}")
  static createGxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
