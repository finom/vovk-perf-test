import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jod")
export default class JodController {
  @operation({
    summary: "Get Jod",
  })
  @get()
  static getJod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jod",
  })
  @post("{id}")
  static createJod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
