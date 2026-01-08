import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdr")
export default class CdrController {
  @operation({
    summary: "Get Cdr",
  })
  @get()
  static getCdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdr",
  })
  @post("{id}")
  static createCdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
