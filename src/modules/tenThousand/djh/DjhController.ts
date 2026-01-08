import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djh")
export default class DjhController {
  @operation({
    summary: "Get Djh",
  })
  @get()
  static getDjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djh",
  })
  @post("{id}")
  static createDjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
