import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhi")
export default class LhiController {
  @operation({
    summary: "Get Lhi",
  })
  @get()
  static getLhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhi",
  })
  @post("{id}")
  static createLhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
