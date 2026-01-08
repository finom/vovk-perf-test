import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzy")
export default class MzyController {
  @operation({
    summary: "Get Mzy",
  })
  @get()
  static getMzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzy",
  })
  @post("{id}")
  static createMzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
