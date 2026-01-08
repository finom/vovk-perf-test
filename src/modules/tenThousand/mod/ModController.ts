import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mod")
export default class ModController {
  @operation({
    summary: "Get Mod",
  })
  @get()
  static getMod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mod",
  })
  @post("{id}")
  static createMod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
