import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfr")
export default class NfrController {
  @operation({
    summary: "Get Nfr",
  })
  @get()
  static getNfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfr",
  })
  @post("{id}")
  static createNfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
