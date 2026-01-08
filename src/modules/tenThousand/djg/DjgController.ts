import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djg")
export default class DjgController {
  @operation({
    summary: "Get Djg",
  })
  @get()
  static getDjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djg",
  })
  @post("{id}")
  static createDjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
