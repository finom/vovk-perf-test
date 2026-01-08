import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mof")
export default class MofController {
  @operation({
    summary: "Get Mof",
  })
  @get()
  static getMof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mof",
  })
  @post("{id}")
  static createMof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
