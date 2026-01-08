import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jci")
export default class JciController {
  @operation({
    summary: "Get Jci",
  })
  @get()
  static getJci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jci",
  })
  @post("{id}")
  static createJci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
