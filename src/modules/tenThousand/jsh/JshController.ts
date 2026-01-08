import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsh")
export default class JshController {
  @operation({
    summary: "Get Jsh",
  })
  @get()
  static getJsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsh",
  })
  @post("{id}")
  static createJsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
