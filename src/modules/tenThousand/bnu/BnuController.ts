import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnu")
export default class BnuController {
  @operation({
    summary: "Get Bnu",
  })
  @get()
  static getBnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnu",
  })
  @post("{id}")
  static createBnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
