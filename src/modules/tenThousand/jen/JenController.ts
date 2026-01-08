import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jen")
export default class JenController {
  @operation({
    summary: "Get Jen",
  })
  @get()
  static getJen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jen",
  })
  @post("{id}")
  static createJen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
