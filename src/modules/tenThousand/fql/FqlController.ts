import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fql")
export default class FqlController {
  @operation({
    summary: "Get Fql",
  })
  @get()
  static getFql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fql",
  })
  @post("{id}")
  static createFql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
