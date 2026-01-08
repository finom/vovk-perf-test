import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfu")
export default class NfuController {
  @operation({
    summary: "Get Nfu",
  })
  @get()
  static getNfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfu",
  })
  @post("{id}")
  static createNfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
