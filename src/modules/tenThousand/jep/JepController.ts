import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jep")
export default class JepController {
  @operation({
    summary: "Get Jep",
  })
  @get()
  static getJep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jep",
  })
  @post("{id}")
  static createJep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
