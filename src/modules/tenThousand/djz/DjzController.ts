import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djz")
export default class DjzController {
  @operation({
    summary: "Get Djz",
  })
  @get()
  static getDjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djz",
  })
  @post("{id}")
  static createDjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
