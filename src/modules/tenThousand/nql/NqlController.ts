import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nql")
export default class NqlController {
  @operation({
    summary: "Get Nql",
  })
  @get()
  static getNql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nql",
  })
  @post("{id}")
  static createNql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
