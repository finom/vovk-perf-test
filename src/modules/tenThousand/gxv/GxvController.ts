import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxv")
export default class GxvController {
  @operation({
    summary: "Get Gxv",
  })
  @get()
  static getGxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxv",
  })
  @post("{id}")
  static createGxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
