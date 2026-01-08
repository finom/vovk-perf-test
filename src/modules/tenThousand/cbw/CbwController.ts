import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbw")
export default class CbwController {
  @operation({
    summary: "Get Cbw",
  })
  @get()
  static getCbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbw",
  })
  @post("{id}")
  static createCbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
