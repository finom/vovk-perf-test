import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmw")
export default class FmwController {
  @operation({
    summary: "Get Fmw",
  })
  @get()
  static getFmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmw",
  })
  @post("{id}")
  static createFmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
