import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djp")
export default class DjpController {
  @operation({
    summary: "Get Djp",
  })
  @get()
  static getDjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djp",
  })
  @post("{id}")
  static createDjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
