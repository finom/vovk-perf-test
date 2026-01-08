import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfj")
export default class NfjController {
  @operation({
    summary: "Get Nfj",
  })
  @get()
  static getNfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfj",
  })
  @post("{id}")
  static createNfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
