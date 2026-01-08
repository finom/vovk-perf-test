import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nob")
export default class NobController {
  @operation({
    summary: "Get Nob",
  })
  @get()
  static getNob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nob",
  })
  @post("{id}")
  static createNob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
