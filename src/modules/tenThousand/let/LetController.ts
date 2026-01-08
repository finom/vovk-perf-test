import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("let")
export default class LetController {
  @operation({
    summary: "Get Let",
  })
  @get()
  static getLet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Let",
  })
  @post("{id}")
  static createLet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
