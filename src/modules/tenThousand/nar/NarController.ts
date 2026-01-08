import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nar")
export default class NarController {
  @operation({
    summary: "Get Nar",
  })
  @get()
  static getNar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nar",
  })
  @post("{id}")
  static createNar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
