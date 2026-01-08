import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fob")
export default class FobController {
  @operation({
    summary: "Get Fob",
  })
  @get()
  static getFob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fob",
  })
  @post("{id}")
  static createFob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
