import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fap")
export default class FapController {
  @operation({
    summary: "Get Fap",
  })
  @get()
  static getFap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fap",
  })
  @post("{id}")
  static createFap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
