import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcx")
export default class LcxController {
  @operation({
    summary: "Get Lcx",
  })
  @get()
  static getLcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcx",
  })
  @post("{id}")
  static createLcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
