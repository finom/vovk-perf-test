import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fef")
export default class FefController {
  @operation({
    summary: "Get Fef",
  })
  @get()
  static getFef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fef",
  })
  @post("{id}")
  static createFef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
