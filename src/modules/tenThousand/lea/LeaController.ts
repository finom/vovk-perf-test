import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lea")
export default class LeaController {
  @operation({
    summary: "Get Lea",
  })
  @get()
  static getLea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lea",
  })
  @post("{id}")
  static createLea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
