import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lti")
export default class LtiController {
  @operation({
    summary: "Get Lti",
  })
  @get()
  static getLti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lti",
  })
  @post("{id}")
  static createLti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
