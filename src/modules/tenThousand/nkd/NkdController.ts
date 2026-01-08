import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkd")
export default class NkdController {
  @operation({
    summary: "Get Nkd",
  })
  @get()
  static getNkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkd",
  })
  @post("{id}")
  static createNkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
