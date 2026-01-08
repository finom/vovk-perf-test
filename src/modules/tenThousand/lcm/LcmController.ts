import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcm")
export default class LcmController {
  @operation({
    summary: "Get Lcm",
  })
  @get()
  static getLcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcm",
  })
  @post("{id}")
  static createLcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
