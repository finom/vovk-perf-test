import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdj")
export default class FdjController {
  @operation({
    summary: "Get Fdj",
  })
  @get()
  static getFdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdj",
  })
  @post("{id}")
  static createFdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
