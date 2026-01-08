import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esl")
export default class EslController {
  @operation({
    summary: "Get Esl",
  })
  @get()
  static getEsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esl",
  })
  @post("{id}")
  static createEsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
