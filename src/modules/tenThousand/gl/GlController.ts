import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gl")
export default class GlController {
  @operation({
    summary: "Get Gl",
  })
  @get()
  static getGl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gl",
  })
  @post("{id}")
  static createGl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
