import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfs")
export default class LfsController {
  @operation({
    summary: "Get Lfs",
  })
  @get()
  static getLfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfs",
  })
  @post("{id}")
  static createLfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
