import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmt")
export default class LmtController {
  @operation({
    summary: "Get Lmt",
  })
  @get()
  static getLmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmt",
  })
  @post("{id}")
  static createLmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
