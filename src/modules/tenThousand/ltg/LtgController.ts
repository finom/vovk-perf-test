import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltg")
export default class LtgController {
  @operation({
    summary: "Get Ltg",
  })
  @get()
  static getLtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltg",
  })
  @post("{id}")
  static createLtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
