import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlp")
export default class JlpController {
  @operation({
    summary: "Get Jlp",
  })
  @get()
  static getJlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlp",
  })
  @post("{id}")
  static createJlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
