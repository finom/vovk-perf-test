import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btj")
export default class BtjController {
  @operation({
    summary: "Get Btj",
  })
  @get()
  static getBtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btj",
  })
  @post("{id}")
  static createBtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
