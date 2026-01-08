import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djy")
export default class DjyController {
  @operation({
    summary: "Get Djy",
  })
  @get()
  static getDjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djy",
  })
  @post("{id}")
  static createDjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
