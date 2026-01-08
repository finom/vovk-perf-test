import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzd")
export default class MzdController {
  @operation({
    summary: "Get Mzd",
  })
  @get()
  static getMzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzd",
  })
  @post("{id}")
  static createMzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
