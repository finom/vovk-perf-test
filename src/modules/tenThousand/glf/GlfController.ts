import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glf")
export default class GlfController {
  @operation({
    summary: "Get Glf",
  })
  @get()
  static getGlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glf",
  })
  @post("{id}")
  static createGlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
