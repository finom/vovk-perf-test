import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldt")
export default class LdtController {
  @operation({
    summary: "Get Ldt",
  })
  @get()
  static getLdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldt",
  })
  @post("{id}")
  static createLdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
