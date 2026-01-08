import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncw")
export default class NcwController {
  @operation({
    summary: "Get Ncw",
  })
  @get()
  static getNcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncw",
  })
  @post("{id}")
  static createNcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
