import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcb")
export default class LcbController {
  @operation({
    summary: "Get Lcb",
  })
  @get()
  static getLcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcb",
  })
  @post("{id}")
  static createLcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
