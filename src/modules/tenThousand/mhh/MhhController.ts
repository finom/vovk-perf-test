import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhh")
export default class MhhController {
  @operation({
    summary: "Get Mhh",
  })
  @get()
  static getMhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhh",
  })
  @post("{id}")
  static createMhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
