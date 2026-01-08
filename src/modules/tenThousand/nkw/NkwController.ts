import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkw")
export default class NkwController {
  @operation({
    summary: "Get Nkw",
  })
  @get()
  static getNkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkw",
  })
  @post("{id}")
  static createNkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
