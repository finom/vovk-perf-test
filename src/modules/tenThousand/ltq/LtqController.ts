import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltq")
export default class LtqController {
  @operation({
    summary: "Get Ltq",
  })
  @get()
  static getLtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltq",
  })
  @post("{id}")
  static createLtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
