import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meh")
export default class MehController {
  @operation({
    summary: "Get Meh",
  })
  @get()
  static getMeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meh",
  })
  @post("{id}")
  static createMeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
