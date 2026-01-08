import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfr")
export default class MfrController {
  @operation({
    summary: "Get Mfr",
  })
  @get()
  static getMfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfr",
  })
  @post("{id}")
  static createMfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
