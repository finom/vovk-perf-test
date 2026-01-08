import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcd")
export default class JcdController {
  @operation({
    summary: "Get Jcd",
  })
  @get()
  static getJcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcd",
  })
  @post("{id}")
  static createJcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
