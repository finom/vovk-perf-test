import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fji")
export default class FjiController {
  @operation({
    summary: "Get Fji",
  })
  @get()
  static getFji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fji",
  })
  @post("{id}")
  static createFji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
