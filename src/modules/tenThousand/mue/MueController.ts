import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mue")
export default class MueController {
  @operation({
    summary: "Get Mue",
  })
  @get()
  static getMue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mue",
  })
  @post("{id}")
  static createMue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
