import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jom")
export default class JomController {
  @operation({
    summary: "Get Jom",
  })
  @get()
  static getJom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jom",
  })
  @post("{id}")
  static createJom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
