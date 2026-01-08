import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfy")
export default class JfyController {
  @operation({
    summary: "Get Jfy",
  })
  @get()
  static getJfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfy",
  })
  @post("{id}")
  static createJfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
