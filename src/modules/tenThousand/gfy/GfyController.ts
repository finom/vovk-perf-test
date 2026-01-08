import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfy")
export default class GfyController {
  @operation({
    summary: "Get Gfy",
  })
  @get()
  static getGfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfy",
  })
  @post("{id}")
  static createGfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
