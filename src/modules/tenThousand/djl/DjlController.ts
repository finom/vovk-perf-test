import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djl")
export default class DjlController {
  @operation({
    summary: "Get Djl",
  })
  @get()
  static getDjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djl",
  })
  @post("{id}")
  static createDjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
