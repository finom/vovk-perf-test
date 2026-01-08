import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ye")
export default class YeController {
  @operation({
    summary: "Get Ye",
  })
  @get()
  static getYe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ye",
  })
  @post("{id}")
  static createYe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
