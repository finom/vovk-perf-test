import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mup")
export default class MupController {
  @operation({
    summary: "Get Mup",
  })
  @get()
  static getMup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mup",
  })
  @post("{id}")
  static createMup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
