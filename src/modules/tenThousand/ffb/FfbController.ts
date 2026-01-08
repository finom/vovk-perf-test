import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffb")
export default class FfbController {
  @operation({
    summary: "Get Ffb",
  })
  @get()
  static getFfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffb",
  })
  @post("{id}")
  static createFfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
