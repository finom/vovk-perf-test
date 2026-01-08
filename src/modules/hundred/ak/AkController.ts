import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ak")
export default class AkController {
  @operation({
    summary: "Get Ak",
  })
  @get()
  static getAk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ak",
  })
  @post("{id}")
  static createAk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
