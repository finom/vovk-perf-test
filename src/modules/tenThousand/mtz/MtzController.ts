import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtz")
export default class MtzController {
  @operation({
    summary: "Get Mtz",
  })
  @get()
  static getMtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtz",
  })
  @post("{id}")
  static createMtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
