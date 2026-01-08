import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltb")
export default class LtbController {
  @operation({
    summary: "Get Ltb",
  })
  @get()
  static getLtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltb",
  })
  @post("{id}")
  static createLtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
