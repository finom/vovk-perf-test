import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbg")
export default class CbgController {
  @operation({
    summary: "Get Cbg",
  })
  @get()
  static getCbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbg",
  })
  @post("{id}")
  static createCbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
