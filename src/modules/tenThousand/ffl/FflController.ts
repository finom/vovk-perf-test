import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffl")
export default class FflController {
  @operation({
    summary: "Get Ffl",
  })
  @get()
  static getFfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffl",
  })
  @post("{id}")
  static createFfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
