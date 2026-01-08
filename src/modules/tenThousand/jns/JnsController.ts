import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jns")
export default class JnsController {
  @operation({
    summary: "Get Jns",
  })
  @get()
  static getJns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jns",
  })
  @post("{id}")
  static createJns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
