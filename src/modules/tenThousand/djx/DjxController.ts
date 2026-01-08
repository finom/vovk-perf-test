import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djx")
export default class DjxController {
  @operation({
    summary: "Get Djx",
  })
  @get()
  static getDjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djx",
  })
  @post("{id}")
  static createDjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
