import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldz")
export default class LdzController {
  @operation({
    summary: "Get Ldz",
  })
  @get()
  static getLdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldz",
  })
  @post("{id}")
  static createLdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
