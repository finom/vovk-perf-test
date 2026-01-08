import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxg")
export default class GxgController {
  @operation({
    summary: "Get Gxg",
  })
  @get()
  static getGxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxg",
  })
  @post("{id}")
  static createGxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
