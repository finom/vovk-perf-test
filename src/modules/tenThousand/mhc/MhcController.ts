import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhc")
export default class MhcController {
  @operation({
    summary: "Get Mhc",
  })
  @get()
  static getMhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhc",
  })
  @post("{id}")
  static createMhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
