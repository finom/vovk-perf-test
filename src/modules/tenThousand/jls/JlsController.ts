import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jls")
export default class JlsController {
  @operation({
    summary: "Get Jls",
  })
  @get()
  static getJls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jls",
  })
  @post("{id}")
  static createJls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
