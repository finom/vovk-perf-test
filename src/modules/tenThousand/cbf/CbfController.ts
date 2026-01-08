import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbf")
export default class CbfController {
  @operation({
    summary: "Get Cbf",
  })
  @get()
  static getCbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbf",
  })
  @post("{id}")
  static createCbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
