import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzy")
export default class BzyController {
  @operation({
    summary: "Get Bzy",
  })
  @get()
  static getBzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzy",
  })
  @post("{id}")
  static createBzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
