import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltv")
export default class LtvController {
  @operation({
    summary: "Get Ltv",
  })
  @get()
  static getLtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltv",
  })
  @post("{id}")
  static createLtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
