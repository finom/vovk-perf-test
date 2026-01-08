import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mru")
export default class MruController {
  @operation({
    summary: "Get Mru",
  })
  @get()
  static getMru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mru",
  })
  @post("{id}")
  static createMru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
