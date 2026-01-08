import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lip")
export default class LipController {
  @operation({
    summary: "Get Lip",
  })
  @get()
  static getLip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lip",
  })
  @post("{id}")
  static createLip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
