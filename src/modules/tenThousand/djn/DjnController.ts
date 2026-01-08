import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djn")
export default class DjnController {
  @operation({
    summary: "Get Djn",
  })
  @get()
  static getDjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djn",
  })
  @post("{id}")
  static createDjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
