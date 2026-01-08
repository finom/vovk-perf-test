import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnd")
export default class MndController {
  @operation({
    summary: "Get Mnd",
  })
  @get()
  static getMnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnd",
  })
  @post("{id}")
  static createMnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
