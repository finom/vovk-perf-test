import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzp")
export default class MzpController {
  @operation({
    summary: "Get Mzp",
  })
  @get()
  static getMzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzp",
  })
  @post("{id}")
  static createMzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
