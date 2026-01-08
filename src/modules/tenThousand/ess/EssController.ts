import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ess")
export default class EssController {
  @operation({
    summary: "Get Ess",
  })
  @get()
  static getEss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ess",
  })
  @post("{id}")
  static createEss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
