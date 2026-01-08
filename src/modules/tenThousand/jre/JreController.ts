import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jre")
export default class JreController {
  @operation({
    summary: "Get Jre",
  })
  @get()
  static getJre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jre",
  })
  @post("{id}")
  static createJre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
