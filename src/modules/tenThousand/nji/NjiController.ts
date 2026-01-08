import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nji")
export default class NjiController {
  @operation({
    summary: "Get Nji",
  })
  @get()
  static getNji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nji",
  })
  @post("{id}")
  static createNji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
