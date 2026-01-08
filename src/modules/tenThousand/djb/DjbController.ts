import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djb")
export default class DjbController {
  @operation({
    summary: "Get Djb",
  })
  @get()
  static getDjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djb",
  })
  @post("{id}")
  static createDjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
