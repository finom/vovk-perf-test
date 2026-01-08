import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffr")
export default class FfrController {
  @operation({
    summary: "Get Ffr",
  })
  @get()
  static getFfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffr",
  })
  @post("{id}")
  static createFfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
