import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpi")
export default class CpiController {
  @operation({
    summary: "Get Cpi",
  })
  @get()
  static getCpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpi",
  })
  @post("{id}")
  static createCpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
