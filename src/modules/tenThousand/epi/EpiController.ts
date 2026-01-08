import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epi")
export default class EpiController {
  @operation({
    summary: "Get Epi",
  })
  @get()
  static getEpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epi",
  })
  @post("{id}")
  static createEpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
