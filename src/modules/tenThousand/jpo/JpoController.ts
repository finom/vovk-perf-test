import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpo")
export default class JpoController {
  @operation({
    summary: "Get Jpo",
  })
  @get()
  static getJpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpo",
  })
  @post("{id}")
  static createJpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
