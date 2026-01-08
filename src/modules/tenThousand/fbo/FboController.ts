import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbo")
export default class FboController {
  @operation({
    summary: "Get Fbo",
  })
  @get()
  static getFbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbo",
  })
  @post("{id}")
  static createFbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
