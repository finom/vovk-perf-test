import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyl")
export default class FylController {
  @operation({
    summary: "Get Fyl",
  })
  @get()
  static getFyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyl",
  })
  @post("{id}")
  static createFyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
