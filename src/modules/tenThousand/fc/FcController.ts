import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fc")
export default class FcController {
  @operation({
    summary: "Get Fc",
  })
  @get()
  static getFc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fc",
  })
  @post("{id}")
  static createFc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
