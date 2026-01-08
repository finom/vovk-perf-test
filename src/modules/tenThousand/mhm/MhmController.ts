import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhm")
export default class MhmController {
  @operation({
    summary: "Get Mhm",
  })
  @get()
  static getMhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhm",
  })
  @post("{id}")
  static createMhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
