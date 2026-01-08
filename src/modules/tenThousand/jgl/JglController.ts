import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgl")
export default class JglController {
  @operation({
    summary: "Get Jgl",
  })
  @get()
  static getJgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgl",
  })
  @post("{id}")
  static createJgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
