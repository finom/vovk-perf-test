import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbm")
export default class CbmController {
  @operation({
    summary: "Get Cbm",
  })
  @get()
  static getCbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbm",
  })
  @post("{id}")
  static createCbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
