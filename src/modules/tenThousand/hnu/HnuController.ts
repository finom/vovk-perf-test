import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnu")
export default class HnuController {
  @operation({
    summary: "Get Hnu",
  })
  @get()
  static getHnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnu",
  })
  @post("{id}")
  static createHnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
