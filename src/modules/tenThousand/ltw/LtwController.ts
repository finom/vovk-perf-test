import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltw")
export default class LtwController {
  @operation({
    summary: "Get Ltw",
  })
  @get()
  static getLtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltw",
  })
  @post("{id}")
  static createLtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
