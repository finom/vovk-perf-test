import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgy")
export default class JgyController {
  @operation({
    summary: "Get Jgy",
  })
  @get()
  static getJgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgy",
  })
  @post("{id}")
  static createJgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
