import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmg")
export default class FmgController {
  @operation({
    summary: "Get Fmg",
  })
  @get()
  static getFmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmg",
  })
  @post("{id}")
  static createFmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
