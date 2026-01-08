import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtb")
export default class MtbController {
  @operation({
    summary: "Get Mtb",
  })
  @get()
  static getMtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtb",
  })
  @post("{id}")
  static createMtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
