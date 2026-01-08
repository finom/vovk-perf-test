import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcg")
export default class LcgController {
  @operation({
    summary: "Get Lcg",
  })
  @get()
  static getLcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcg",
  })
  @post("{id}")
  static createLcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
