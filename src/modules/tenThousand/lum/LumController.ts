import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lum")
export default class LumController {
  @operation({
    summary: "Get Lum",
  })
  @get()
  static getLum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lum",
  })
  @post("{id}")
  static createLum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
