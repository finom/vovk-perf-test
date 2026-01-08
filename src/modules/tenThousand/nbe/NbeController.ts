import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbe")
export default class NbeController {
  @operation({
    summary: "Get Nbe",
  })
  @get()
  static getNbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbe",
  })
  @post("{id}")
  static createNbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
