import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhp")
export default class MhpController {
  @operation({
    summary: "Get Mhp",
  })
  @get()
  static getMhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhp",
  })
  @post("{id}")
  static createMhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
