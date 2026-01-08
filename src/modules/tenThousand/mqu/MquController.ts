import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqu")
export default class MquController {
  @operation({
    summary: "Get Mqu",
  })
  @get()
  static getMqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqu",
  })
  @post("{id}")
  static createMqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
