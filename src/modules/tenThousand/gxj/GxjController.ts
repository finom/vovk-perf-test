import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxj")
export default class GxjController {
  @operation({
    summary: "Get Gxj",
  })
  @get()
  static getGxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxj",
  })
  @post("{id}")
  static createGxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
