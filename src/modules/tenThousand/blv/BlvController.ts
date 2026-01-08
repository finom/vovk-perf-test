import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blv")
export default class BlvController {
  @operation({
    summary: "Get Blv",
  })
  @get()
  static getBlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blv",
  })
  @post("{id}")
  static createBlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
