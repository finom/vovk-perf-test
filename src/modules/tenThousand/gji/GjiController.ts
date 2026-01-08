import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gji")
export default class GjiController {
  @operation({
    summary: "Get Gji",
  })
  @get()
  static getGji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gji",
  })
  @post("{id}")
  static createGji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
