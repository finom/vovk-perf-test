import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmb")
export default class FmbController {
  @operation({
    summary: "Get Fmb",
  })
  @get()
  static getFmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmb",
  })
  @post("{id}")
  static createFmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
