import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fox")
export default class FoxController {
  @operation({
    summary: "Get Fox",
  })
  @get()
  static getFox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fox",
  })
  @post("{id}")
  static createFox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
