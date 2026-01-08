import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwd")
export default class CwdController {
  @operation({
    summary: "Get Cwd",
  })
  @get()
  static getCwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwd",
  })
  @post("{id}")
  static createCwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
