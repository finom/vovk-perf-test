import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lax")
export default class LaxController {
  @operation({
    summary: "Get Lax",
  })
  @get()
  static getLax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lax",
  })
  @post("{id}")
  static createLax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
