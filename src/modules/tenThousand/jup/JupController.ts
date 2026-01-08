import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jup")
export default class JupController {
  @operation({
    summary: "Get Jup",
  })
  @get()
  static getJup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jup",
  })
  @post("{id}")
  static createJup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
