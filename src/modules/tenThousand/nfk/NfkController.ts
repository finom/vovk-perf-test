import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfk")
export default class NfkController {
  @operation({
    summary: "Get Nfk",
  })
  @get()
  static getNfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfk",
  })
  @post("{id}")
  static createNfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
