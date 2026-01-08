import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhf")
export default class MhfController {
  @operation({
    summary: "Get Mhf",
  })
  @get()
  static getMhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhf",
  })
  @post("{id}")
  static createMhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
