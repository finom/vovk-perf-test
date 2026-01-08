import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngg")
export default class NggController {
  @operation({
    summary: "Get Ngg",
  })
  @get()
  static getNgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngg",
  })
  @post("{id}")
  static createNgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
