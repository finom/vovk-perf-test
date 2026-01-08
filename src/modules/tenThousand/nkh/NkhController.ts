import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkh")
export default class NkhController {
  @operation({
    summary: "Get Nkh",
  })
  @get()
  static getNkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkh",
  })
  @post("{id}")
  static createNkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
