import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcc")
export default class FccController {
  @operation({
    summary: "Get Fcc",
  })
  @get()
  static getFcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcc",
  })
  @post("{id}")
  static createFcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
