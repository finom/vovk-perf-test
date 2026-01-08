import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lem")
export default class LemController {
  @operation({
    summary: "Get Lem",
  })
  @get()
  static getLem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lem",
  })
  @post("{id}")
  static createLem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
