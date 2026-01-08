import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcc")
export default class JccController {
  @operation({
    summary: "Get Jcc",
  })
  @get()
  static getJcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcc",
  })
  @post("{id}")
  static createJcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
