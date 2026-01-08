import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bls")
export default class BlsController {
  @operation({
    summary: "Get Bls",
  })
  @get()
  static getBls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bls",
  })
  @post("{id}")
  static createBls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
