import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cre")
export default class CreController {
  @operation({
    summary: "Get Cre",
  })
  @get()
  static getCre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cre",
  })
  @post("{id}")
  static createCre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
