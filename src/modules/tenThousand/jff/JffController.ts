import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jff")
export default class JffController {
  @operation({
    summary: "Get Jff",
  })
  @get()
  static getJff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jff",
  })
  @post("{id}")
  static createJff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
