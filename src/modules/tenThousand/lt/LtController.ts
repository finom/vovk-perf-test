import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lt")
export default class LtController {
  @operation({
    summary: "Get Lt",
  })
  @get()
  static getLt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lt",
  })
  @post("{id}")
  static createLt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
